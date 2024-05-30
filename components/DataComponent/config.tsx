import { createElement } from "react";



import { Text } from "@mantine/core";


	/*
export function get_render_jsx(path, render_props) {
	var render_jsx = get_render_prop(path, '_render_jsx', render_props);
	if(render_jsx == null) {
		var render_txt = get_render_prop(path, '_render_txt', render_props);
		if(render_txt != null) {
			render_jsx = '<DataComponent overrides={{data: `'+render_txt+'`}} {...props} />';
		}
	}
	return render_jsx;
}
	*/

export function get_render_props(path, render_props) {
	let keys = enumerate_path_keys(path).reverse();
	let props = {};
	
	//go in order of least specic to most and overwrite
	keys.forEach((key) => {
		let p = render_props[key];
		if(p != null) {
			props = Object.assign({}, props, p);
		}
	});
	
	if('_class' in props) {
		props = Object.assign({}, render_props[props['_class']], props);
	}
	
	return props;
}

export function get_render_prop(path, prop_name, render_props) {
	var props = get_render_props(path, render_props);
	return props != null ? props[prop_name] : null;
}

export function test() {

	//return table_format();
	//return get_render_prop('.assessment_plan[0]', '_render_js', g_render_props);
	//return JSON.stringify(get_render_props('.assessment_plan[0]', g_render_props), null, 2);
	let val = enumerate_path_keys('.hello[4].assessment_plan[0].world.test[2]')
	//let val = general_regex('.hello[4].assessment_plan[].world.test[2]')
	return <pre>{JSON.stringify(val, null, 2)}</pre>;
}

function enumerate_path_keys(path) {
	let keys = [];
	
	let parts = path.split('.');
	for (let i = 1; i < parts.length; i++) {
		let new_paths = [];
		for (let j=0; j<keys.length; j++) {
			new_paths.push(keys[j] + '.' + parts[i]);
		
			if(parts[i].endsWith(']')) {
				new_paths.push(keys[j] + '.' + parts[i].split('[')[0] + '[]');
				new_paths.push(keys[j] + '.[]');
			}
		}
		
		if(i==1){
			new_paths.push('.' + parts[i]);
		}
		new_paths.push(parts[i]);
		
		if(parts[i].endsWith(']')) {
			if(i==1) {
				new_paths.push('.' + parts[i].split('[')[0] + '[]');
				new_paths.push('.[]');
			}
			new_paths.push(parts[i].split('[')[0] + '[]');
			new_paths.push('[]');
		}

		keys = new_paths;
	}

	return keys;
}

function general_regex(path) {
	path = path.replace(/\[/g, '([');
	path = path.replace(/\]/g, ']|[])');
	path = path.replaceAll('.', '\\.');
	path = path.replaceAll('[', '\\[');
	path = path.replaceAll(']', '\\]');
	return path;
}


export function test_table_format() {
	
	
	var table_format_long =  {
			"rows": [
				{
					"cells": [
						{
							"cell_type": "header",
							"value": ""
						},
						{
							"cell_type": "header",
							"value": "SPH"
						},
						{
							"cell_type": "header",
							"value": "CYL"
						}
					]
				},
				{
					"cells": [
						{
							"cell_type": "header",
							"value": "RT"
						},
						{
							"cell_type": "value",
							"value": "${props.data.sph_od}"
						},
						{
							"cell_type": "value",
							"value": "${props.data.cyl_od}"
						}
					]
				},
				{
					"cells": [
						{
							"cell_type": "header",
							"value": "LT"
						},
						{
							"cell_type": "value",
							"value": "${props.data.sph_os}"
						},
						{
							"cell_type": "value",
							"value": "${props.data.cyl_os}"
						}
					]
				}
			]
		};
	
	var short_format = [
		[["H", ""], ["H", "SPH"], ["H", "CYL"]],
		[["H", "RT"], "sph_od", "cyl_od"],
		[["H", "LT"], "sph_os", "cyl_os"]
	];
	
	var expanded = expand_table_format(short_format);
	
	return <div>
	<Text>{JSON.stringify(table_format_long.rows[0])}</Text><Text>{JSON.stringify(expanded.rows[0])}</Text>
	<Text>{JSON.stringify(table_format_long.rows[1])}</Text><Text>{JSON.stringify(expanded.rows[1])}</Text>
	<Text>{JSON.stringify(table_format_long.rows[2])}</Text><Text>{JSON.stringify(expanded.rows[2])}</Text>
	</div>;
}

function expand_data_cell_format(f, styles) {
	if(typeof f == 'string') {
		f = {'cell_type': 'value', 'value': '${props.data.' + f + '}'};
	}
	else if(Array.isArray(f)) {
		if(f.length == 1) {
			f =  {'cell_type': 'value', 'value': f[0]};
		}
		else if(f.length == 2) {
			f =  {'cell_type': (f[0] == 'H' ? 'header' : 'value'), 'value': f[1]};
		}
		else if(f.length == 3) {
			f =  {'cell_type': (f[0] == 'H' ? 'header' : 'value'), 'value': f[1], 'style': f[2]};
		}
	}
	
	if(styles) {
		if(f.cell_type == 'header' && styles.th) {
			f['style'] = styles.th;
		}
		else if(f.cell_type == 'value' && styles.td) {
			f['style'] = styles.td;
		}
	}
	
	return f;
}

function expand_data_row_format(f, styles) {
	if(Array.isArray(f)) {
		f = {'cells': f};
	}
	
	if(styles && styles.tr) {
		f['style'] = styles.tr;
	}
	
	f.cells = f.cells.map((c) => expand_data_cell_format(c, styles));
	return f;
}

export function expand_table_format(fmt_config) {
	
	if(Array.isArray(fmt_config)) {
		fmt_config = {
			'rows': fmt_config
		};
	}
	
	let styles = fmt_config.style ? fmt_config.style : {th: {'text-align': 'left'}, td: {'text-align': 'left'}};
	if(styles && styles.table) {
		fmt_config['style'] = styles.table;
	}
	
	fmt_config['rows'] = fmt_config['rows'].map((r) => expand_data_row_format(r, styles));
	return fmt_config;
}