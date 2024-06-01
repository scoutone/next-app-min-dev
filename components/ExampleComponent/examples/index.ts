import * as default_structured_render from './default_structured_render';
import * as numbering from './numbering';
import * as dict_to_text from './dict_to_text';
import * as rollup from './rollup';
import * as rollup_as_list from './rollup_as_list';
import  * as custom_render from './custom_render';
import  * as tables from './tables';
import * as tables_advanced_config from './tables_advanced_config';
import * as dr_price_1 from './dr_price_example_1';
import * as dr_price_2 from './dr_price_example_2';
import * as lapeer_1 from './lapeer_example';
import * as lapeer_2 from './lapeer_example_2';

const debug_examples_files = [lapeer_2];
const public_example_files = [
  default_structured_render, 
  numbering, 
  dict_to_text, 
  rollup,
  rollup_as_list,
  custom_render,
  tables,
  tables_advanced_config,
  dr_price_1, 
  dr_price_2,
  lapeer_1
];

function build_item(x) {
  let render_props = null;
  let str_render_props = null;
  if(x.example.str_render_props) {
    str_render_props = x.example.str_render_props;
    if(x.example.render_props == null) {
      render_props = JSON.parse(x.example.str_render_props);
    }
  }
  
  if(x.example.render_props) {
    render_props = x.example.render_props;
    if(x.example.str_render_props == null) {
      str_render_props = JSON.stringify(x.example.render_props, null, 2);
    }
  }
  
  return {
    id: x.example.id ? x.example.id : x.example.name.replaceAll(' ', '_').toLowerCase(),
    name: (x.example.name ? x.example.name : null),
    description: (x.example.description ? x.example.description : null),
    data: (x.example.data ? x.example.data : null),
    render_props: render_props,
    str_render_props: str_render_props
  };
};

export const examples = public_example_files.map(build_item);
export const dev_examples = debug_examples_files.map(build_item);