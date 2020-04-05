import React from 'react';
import { Block } from './Block';

const Category = (props) => props.hidden === true ? null : (
  <category is="category" name={props.name}>
    {props.blocks ? Object.entries(props.blocks).map(([name, func]) => {
      let id = name.replace(/[ .]/g, '-').toLowerCase();

      return (
        <Block key={id} name={name} func={func} hidden={props.hidden === true} />
      )
    }) : null}
    {props.children}
  </category>
)

export default Category;
