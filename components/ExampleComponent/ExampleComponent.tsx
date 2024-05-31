'use client';
import { Text } from "@mantine/core";
import { examples, dev_examples }  from './examples'
import { BreakingText } from "@/components/BreakingText";
import { DataComponent } from "@/components/DataComponent";
import { useSearchParams } from 'next/navigation'

export const ExampleComponent = (props) => {
  
  let code_block_style = {
    background: '#f4f4f4',
    border: '1px solid #ddd',
    color: '#666',
    'page-break-inside': 'avoid',
    'font-family': 'monospace',
    'font-size': '15px',
    'line-height': '1.6',
    'margin-bottom': '1.6em',
    'max-width': '100%',
    //overflow: 'auto',
    padding: '1em 1.5em',
    display: 'block',
    'word-wrap': 'break-word',
    'white-space': 'pre-wrap'
  }
  
  const q = useSearchParams();
  let selected_id = (q.get('id') ? q.get('id') : examples[0].id);
  let is_dev = q.has('dev');
  let is_debug = q.has('debug');

  
  let select_options = [];
  
  let visible_examples = examples;
  if (is_dev) visible_examples = visible_examples.concat(dev_examples);
  
  let ex = visible_examples.map((item) => {
    if(item.id == selected_id) {
      select_options.push(<option value={item.id} selected>{item.name}</option>);
    }
    else {
      select_options.push(<option value={item.id}>{item.name}</option>);
    }
    
    let render_props = (item.render_props ? item.render_props : {});
    if(q.has('debug')) {
      render_props['debug'] = true;
    }
    
    let components =  [
      <h2>{item.name}</h2>,
      <BreakingText>{item.description ? item.description : ''}</BreakingText>,
      <h2>Formatted:</h2>,
      <DataComponent data={item.data} path='.' render_props={render_props} />,
      <h2>Data</h2>,
      <pre style={code_block_style}>{JSON.stringify(item.data, null, 2)}</pre>
    ];
    
    if(item.str_render_props) {
      components.push(<h2>Render Props {is_debug ? '[STR]' : ''}</h2>);
      components.push(<pre style={code_block_style}>{item.str_render_props}</pre>);
      
      if(is_debug) {
        components.push(<h2>Render Props [JSON]</h2>);
        components.push(<pre style={code_block_style}>{JSON.stringify(item.render_props, null, 2)}</pre>);
      }
    }
    
    
    return <div id={item.id} style={{display: (item.id == selected_id ? 'block' : 'none')}}>{components}</div>;
  });
  
  function show_div() {
    let selected_id = document.getElementById('example_list').value;
    let grouper = document.getElementById('example_group');
    for (let child of grouper.children) {
      child.style.display = 'none';
    }
    document.getElementById(selected_id).style.display = 'block';
  }
  
  return ['Examples: ', <select id='example_list' onChange={show_div}>{select_options}</select>, <div id='example_group'>{ex}</div>];
  
};