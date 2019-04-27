import React from 'react';
import Blockly from 'node-blockly/browser';
import { Block } from './Block';

if (typeof Blockly.BlockSvg !== 'undefined') {
  Blockly.BlockSvg.START_HAT = true;
}

if (typeof Blockly.JavaScript !== 'undefined') {
  Blockly.JavaScript.addReservedWords('discordblocks');
  Blockly.JavaScript.addReservedWords('param1');
}

const Category = (props) => (
  <category is="category" name={props.name || props.blocks.name}>
    {props.blocks && props.blocks.blocks ? Object.keys(props.blocks.blocks).map((name) => {
      let id = name.replace(/[ .]/g, '-').toLowerCase();
      
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
