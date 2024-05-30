'use client';
import { Text } from "@mantine/core";

export const BreakingText = (props) => {
  
  if(props.children == null) {
	return <Text></Text>
  }
  
  var children = (Array.isArray(props.children) ? props.children.join('') : props.children) + '';
  
  let lines = children.split('\n');
  
  return lines.map((line, index) => {
	return (<Text key={index} style={props.style}>{line}</Text>);
  });
};
