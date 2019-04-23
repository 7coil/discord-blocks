import React from 'react';
import Blockly from 'node-blockly/browser';
import { Block } from './Block';

if (typeof Blockly.BlockSvg !== 'undefined') {
  Blockly.BlockSvg.START_HAT = true;
}

if (typeof Blockly.JavaScript !== 'undefined') {
  Blockly.JavaScript.addReservedWords('discordblocks');
}

const Category = (props) => (
  <category is="category" name={props.name || props.blocks.name}>
    {props.blocks && props.blocks.blocks ? Object.keys(props.blocks.blocks).map((name) => {
      let id = name
      if (typeof props.prefix === 'string') {
        if (props.prefix.length === 0) {
          id = name
        } else {
          id = `${props.prefix}-${name}`
        }
      } else {
        id = `${props.blocks.name}-${name}`
      }

      id = id.replace(/[ .]/g, '-').toLowerCase();
      
      const func = props.blocks.blocks[name];

      return (
        <Block key={id} name={id} func={func} />
      )
    }) : null}
    {props.children}
  </category>
)

export default Category;
export {
  Blockly
}
