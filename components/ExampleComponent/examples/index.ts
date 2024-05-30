import * as default_structured_render from './default_structured_render';
import * as numbering from './numbering';
import * as dict_to_text from './dict_to_text';
import * as rollup from './rollup';
import * as rollup_as_list from './rollup_as_list';
import  * as custom_render from './custom_render';
import  * as tables from './tables';
import * as tables_advanced_config from './tables_advanced_config';

export const examples = [
  default_structured_render, 
  numbering, 
  dict_to_text, 
  rollup,
  rollup_as_list,
  custom_render,
  tables,
  tables_advanced_config
].map((x) => {
  return {
    id: x.example.id ? x.example.id : x.example.name.replaceAll(' ', '_').toLowerCase(),
    name: (x.example.name ? x.example.name : null),
    description: (x.example.description ? x.example.description : null),
    data: (x.example.data ? x.example.data : null),
    render_props: (x.example.render_props ? x.example.render_props : null)
  };
});