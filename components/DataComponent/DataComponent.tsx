'use client';
import { Text } from "@mantine/core";
import { BreakingText } from "@/components/BreakingText";
import { get_render_props, get_render_prop, component, COMPONENTS_ENUM_C, expand_table_format, get_render_jsx  } from "./config";
import { createElement } from 'react';
import JsxParser from 'react-jsx-parser';
import React from 'react';

const debug=false

let table_border=(debug? 1 : 0);
//table_border = 1;

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

function transform(data, transform_js) {
	let trans_func = eval('(data) => ' +string_escape(transform_js));
	return trans_func(data);
}

function remove_keys(data, keys) {
	let removed = {};
	for (const [key, value] of Object.entries(data)) {
		if(!keys.includes(key)) {
	    	removed[key] = value;
		}
	}
	return removed;
}

function rename_keys(data, key_name_map) {
	let renamed = {};
	for (const [key, value] of Object.entries(data)) {
		renamed[key in key_name_map ? key_name_map[key] : key] = value;
	}
	return renamed;
}

function rollup(data, field_name, formatter=null, order=null, order_values_field=null, order_values='asc', rollup_as='dict') {
	let field_values = [...new Set(data.map((item) => item[field_name]))];
	if(order != null) {
		field_values.sort((a,b) => (order == 'asc' ? 1 : -1) * a.localeCompare(b));
	}
	
	if(formatter != null) formatter = eval('(data) => '+formatter);
	
	let rolled = (rollup_as == 'list' ? [] : {});
	field_values.forEach((field_value) => {
		let value_rows = data.filter((item) => item[field_name] == field_value);
		if(order_values_field != null) {
			value_rows.sort((a,b) => (order_values == 'asc' ? 1 : -1) * a[order_values_field].localeCompare(b[order_values_field]));
		}
		if(formatter != null) {
			value_rows = value_rows.map((item) => formatter(item));
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

function parse_jsx(jsx, props) {
	return <JsxParser jsx={jsx} components={{ DataComponent }} bindings={{ props: props, util: {rollup: rollup, stringify: JSON.stringify} }} />;
}


export class DataComponent extends React.Component {

	render() {
		
		const titleCase = (s) =>
			s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
				.replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()); // First char after each -/_


		if (this.props.overrides != null) {
			var new_props = {};
			var t_props = this.props;
			Object.keys(this.props).forEach(function(k) { if (k != 'overrides') new_props[k] = t_props[k]; });
			Object.keys(this.props.overrides).forEach(function(k) { new_props[k] = t_props.overrides[k]; });
			this.props = new_props;
		}

		let render_props = get_render_props(this.props.path, this.props.render_props);
		if(render_props._transform_js && this.props.skip_transform_js != true) {
			let transformed = transform(this.props.data, render_props._transform_js);
			this.props = Object.assign({}, this.props, {'data': transformed, 'skip_transform_js': true});
		}
		
		if(this.props.data == null) {
			this.props = Object.assign({}, this.props, {data: ''})
		}
		

		var t;

        //==============//
        //    OBJECT    //
        //==============//
        let logic_path;
		if (typeof this.props.data === 'object') {
			if (!Array.isArray(this.props.data)) {
				var table_format = get_render_prop(this.props.path, '_table_format', this.props.render_props);
				if (this.props.skip_custom_render != true && render_props._render_jsx != null) {
					logic_path = 'object.render_jsx';
					var js_props = Object.assign({}, this.props, { skip_custom_render: true });
					t = parse_jsx(render_props._render_jsx, js_props)
					//t = <JsxParser jsx={render_jsx} components={{ DataComponent }} bindings={{ props: js_props }} />;
				}
				else if (table_format != null) {
					logic_path = 'object.table';
					let json_table_format = '`' + JSON.stringify(expand_table_format(table_format)) + '`';
					let interpolate_func = eval(`(props) => { return JSON.parse(${json_table_format})}`);
					let table_data = interpolate_func(this.props);

					//return <Text>{JSON.stringify(table_data)}</Text>

					var rows = table_data.rows.map((row, ridx) => {
						var cols = row.cells.map((cell, cidx) => {
							let style={};
							if(cell.style != null) style = cell.style;
							
							if (cell.cell_type == 'header') {
								return <th style={style}>{cell.value}</th>;
							}
							else {
								return <td style={style}>{cell.value}</td>;
							}
						});
						return <tr>{cols}</tr>;
					});

					if (this.props.sub_rows != true) {
						let style = table_data.style ? table_data.style : {};
						t = <table style={style} border={table_data.border != null && table_border == 0 ? table_data.border : table_border}><tbody>{rows}</tbody></table>
					}
					else {
						t = rows;
					}
				}
				else {
					logic_path = 'object.standard';
					t = Object.keys(this.props.data).map((key) => {
						var subdata = this.props.data[key];
						var subpath = this.props.path + (this.props.path == '.' ? '' : '.') + key.replace(' ', '_');

						if (subdata != null && typeof subdata == 'object') {
							
							let colspan = 1;
							if (get_render_prop(this.props.path+'.'+key, '_suppress_indent', this.props.render_props) != true) {
								colspan = 2;
							}

							let rows = []
							if (get_render_prop(this.props.path+'.'+key, '_suppress_header', this.props.render_props) != true) {
								rows.push(
									<tr>
										<td colSpan={colspan}><h3>{titleCase(key)}: </h3></td>
									</tr>
								);
							}

							if (get_render_prop(this.props.path+'.'+key, '_suppress_hr', this.props.render_props) != true &&
							    get_render_prop(this.props.path, '_suppress_hrs', this.props.render_props) != true) {
								rows.push(
									<tr>
										<td colSpan={colspan}><hr /></td>
									</tr>
								);
							}
							
							if(colspan == 2) {
								rows.push(
									<tr>
										<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
										<td width="100%" align="left"><DataComponent data={this.props.data[key]} path={subpath} render_props={this.props.render_props} /></td>
									</tr>
								)
							} 
							else {
								rows.push(
									<tr>
										<td width="100%" align="left"><DataComponent data={this.props.data[key]} path={subpath} render_props={this.props.render_props} /></td>
									</tr>
								)
							}
							
							return (
									<table key={key} border={table_border}>
										<tbody>
											{rows}
										</tbody>
									</table>
							);
						}
						else {
							return (
								<table key={key} border={table_border}>
									<tbody>
										<tr>
											<td><BreakingText style={{ fontWeight: "bold" }}>{titleCase(key)}: </BreakingText></td>
											<td><DataComponent data={this.props.data[key]} path={subpath} render_props={this.props.render_props} /></td>
										</tr>
									</tbody>
								</table>
							);

						}
					});
				}
				
				if(debug) {
					if(this.props.sub_rows == true) {
						t.push(<tr><td>[{logic_path}]table_format: {JSON.stringify(table_format)}][sub_rows: {JSON.stringify(Object.keys(this.props))}]</td></tr>);
					}
					else {
						t = <div>[{logic_path}]table_format: {JSON.stringify(table_format)}][sub_rows: {JSON.stringify(Object.keys(this.props))}]{t}</div>;
					}
				}
			}
			//==============//
      //     ARRAY    //
      //==============//
			else {
				if(render_props == null) render_props = {};
				var table_format = render_props._table_format;
				
				if (this.props.skip_custom_render != true && render_props._render_jsx != null) {
					var js_props = Object.assign({}, this.props, { skip_custom_render: true });
					t = parse_jsx(render_props._render_jsx, js_props);
				}
				else if (table_format != null) {
					let json_table_format = '`' + JSON.stringify(expand_table_format(table_format)) + '`';
					let interpolate_func = eval(`(props) => { return JSON.parse(${json_table_format})}`);
					let table_data = interpolate_func(this.props);
					

					//return <Text>{JSON.stringify(table_data)}</Text>

					var rows = table_data.rows.map((row, ridx) => {
						let row_style = row.style ? row.style : {};
						var cols = row.cells.map((cell, cidx) => {
							let cell_style = cell.style ? cell.style : {};
							
							if (cell.cell_type == 'header') {
								return <th style={cell_style}>{cell.value}</th>;
							}
							else {
								return <td style={cell_style}>{cell.value}</td>;
							}
						});
						return <tr style={row_style}>{cols}</tr>;
					});

					let data_grid_rows;
					if('_data_grid_rows' in render_props) {
						data_grid_rows = render_props._data_grid_rows;
					}
					else {
						data_grid_rows = "props.data";
					}
					
					if(data_grid_rows) {
						let interpolate_func = eval(`(props) => { return ${data_grid_rows};}`);
						let row_data = interpolate_func(this.props);
						
						var sub_row_components = <DataComponent data={row_data} path={this.props.path + '.row_data'} render_props={this.props.render_props} sub_rows={true} />;
						//var rr = <tr><td>[[{JSON.stringify(Object.keys( row_data))}]]</td></tr>
						rows = rows.concat(sub_row_components);
					}
					
					if(this.props.sub_rows != true) {
						let style = table_data.style ? table_data.style : {};
						t = <table style={style} border={table_data.border != null && table_border == 0 ? table_data.border : table_border}><tbody>{rows}</tbody></table>
					}
					else {
						t = rows;
					}
				}
				else {
					t = this.props.data.map((element, index) => {
						var subpath = this.props.path + '[' + index + ']';
						var sub_render_props = get_render_props(subpath, this.props.render_props);

						var sub;
						if (this.props.skip_custom_render != true && sub_render_props._render_jsx != null) {
							var js_props = Object.assign({}, this.props, { skip_custom_render: true, data: element, path: subpath });
							sub = parse_jsx(sub_render_props._render_jsx, js_props);
						}
						else {
							sub = <DataComponent data={element} path={subpath} render_props={this.props.render_props} sub_rows={this.props.sub_rows == true} />;
						}
						
						if(this.props.sub_rows != true) {
							if(render_props._number) {
								sub = <li>{sub}</li>
							}
							else {
								sub = <tr><td>{sub}</td></tr>
							}
						}
						
						return sub;
					});
					
					console.log(this.props.path + ": "+ JSON.stringify(render_props));
					
					if (this.props.sub_rows == true) {
						//TODO: numbering for table sub-rows
					}
					else {
						if(render_props._number) {
							t = <ol>{t}</ol>
						}
						else {
							t = <table border={table_border}><tbody>{t}</tbody></table>
						}
						//t = <ol>{t}</ol>
						//t = <table border={table_border}><tbody>{t}</tbody></table>
					}
				}
			}
		}
		else if (this.props.skip_custom_render != true && render_props._render_jsx != null) {
      logic_path = 'string.render_jsx';
      var js_props = Object.assign({}, this.props, { skip_custom_render: true });
      t = parse_jsx(render_props._render_jsx, js_props)
      //t = <JsxParser jsx={render_jsx} components={{ DataComponent }} bindings={{ props: js_props }} />;
    }
		else {
			t = <BreakingText style={{ 'white-space': "pre" }}>{this.props.data}</BreakingText>;
		}
		
		if(debug) {
			t = <div>[path: {this.props.path}][props keys: {JSON.stringify(Object.keys(this.props))}]{t}</div>
		}
			
		if (this.props.sub_rows != true) {
			t = <div className="data_component">{t}</div>
		}

		return (
			<>
				{t}
			</>
		);
	}
}
