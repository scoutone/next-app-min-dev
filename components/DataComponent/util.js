

function string_escape(s) {
    return s ? s.replace(/\\/g,'\\\\')
                .replace(/\n/g,'\\n')
                .replace(/\t/g,'\\t')
                .replace(/\v/g,'\\v')
                .replace(/`/g,"\\`")
                //.replace(/'/g,"\\'")
                //.replace(/"/g,'\\"')
                .replace(/[\x00-\x1F\x80-\x9F]/g,hex) : s;
    function hex(c) { var v = '0'+c.charCodeAt(0).toString(16); return '\\x'+v.substr(v.length-2); }
}

export function transform(data, transform_js) {
  if(Array.isArray(transform_js)) {
    transform_js = transform_js.join('');
  }
  let trans_func = eval('(data) => ' +string_escape(transform_js));
  return trans_func(data);
}

export function remove_keys(data, keys) {
  let removed = {};
  for (const [key, value] of Object.entries(data)) {
    if(!keys.includes(key)) {
        removed[key] = value;
    }
  }
  return removed;
}

export function remove_null_entries(data) {
  let removed = {};
  for (const [key, value] of Object.entries(data)) {
    if(value != null) {
        removed[key] = value;
    }
  }
  return removed;
}

export function rename_keys(data, key_name_map) {
  let renamed = {};
  for (const [key, value] of Object.entries(data)) {
    renamed[key in key_name_map ? key_name_map[key] : key] = value;
  }
  return renamed;
}

export function join_valued(delim, values, default_val='') {
  //first check for any sub-arrays
  values = values.map((v) => Array.isArray(v) ? join_if_all_valued('', v) : v);
  let non_blank = values.filter((v) => v != null && v.toString().trim() > '');
  return non_blank.length > 0 ? non_blank.join(delim) : default_val;
}

export function join_if_all_valued(delim, values) {
  let non_blank = values.filter((v) => v != null && v.toString().trim() > '');
  return values.length == non_blank.length ? non_blank.join(delim) : null;
}

function compare(a, b, order='asc') {
  let cmp;
  if(a == null && b == null) {
    cmp = 0;
  }
  else if(a == null) {
    cmp = 1;
  }
  else if(b == null) {
    cmp = -1;
  }
  else if(typeof(a) == 'number' && typeof(b) == 'number') {
    cmp = a-b;
  }
  else {
   cmp = a.localeCompare(b);
  }
  
  return (order == 'asc' ? 1 : -1) * cmp; 
}

export function rollup(data, field_name, formatter=null, order=null, order_values_field=null, order_values='asc', rollup_as='dict', number_values=false) {
  let field_values = [...new Set(data.map((item) => item[field_name]))];
  if(order != null) {
    field_values.sort((a,b) => compare(a, b, order));
  }
  
  if(formatter != null) formatter = eval('(data, row_number) => '+formatter);
  
  let rolled = (rollup_as == 'list' ? [] : {});
  field_values.forEach((field_value) => {
    let value_rows = data.filter((item) => item[field_name] == field_value);
    if(order_values_field != null) {
      value_rows.sort((a,b) => compare(a[order_values_field], b[order_values_field], order_values));
    }
    if(formatter != null) {
      value_rows = value_rows.map((item, index) => formatter(item, index));
      if(number_values) {
        value_rows = value_rows.map((item, index) => (index+1) + '. ' + item);
      }
    }
    
    if(rollup_as == 'list') {
      rolled.push(field_value);
      rolled.push(value_rows);
    } else {
      rolled[field_value] = value_rows;
    }
  });
  
  return rolled;
}