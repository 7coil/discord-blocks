import React from 'react';
import Blockly from 'node-blockly/browser';

if (typeof Blockly.BlockSvg !== 'undefined') {
  Blockly.BlockSvg.START_HAT = true;
}

if (typeof Blockly.JavaScript !== 'undefined') {
  Blockly.JavaScript.addReservedWords('discordblocks');
}

const Category = (props) => (
  <category name={props.name || props.blocks.name}>
    {props.blocks.blocks ? Object.keys(props.blocks.blocks).map((name) => {
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

      // If the block is truthy
      if (func) {
        // If it has a block generator, add the block
        if (func.block && typeof Blockly.Blocks !== 'undefined') {
          Blockly.Blocks[id] = func.block;
        }

        // If it has a javascript generator, add the generator
        if (func.generator && typeof Blockly.JavaScript !== 'undefined') {
          Blockly.JavaScript[id] = func.generator;
        }
      }

      // Add the block to the list of blocks in the category
      return (
        <block type={id} key={id}></block>
      )
    }) : null}
    {props.children}
  </category>
)

export default Category;
export {
  Blockly
}
