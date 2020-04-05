import React from 'react';
import Blockly from '../../modules/Blockly';

const Block = (props) => {
  const id = props.name.replace(/[ .]/g, '-').toLowerCase()
  
  const func = props.func;
  // If the block is truthy
  if (func) {
    // If hidden, don't add to the inventory.
    if (func.hidden === true || props.hidden === true) return null;

    // Add the block to the list of blocks in the category
    return (
      <block is="block" type={id} key={id}></block>
    )
  }

  return null;
}

export {
  Block
}
