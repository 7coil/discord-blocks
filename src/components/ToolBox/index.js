import React, { Component } from 'react';
import Category from './Category';
import CoreCategory from './categories/CoreCategory';
import categoryDefinitions from './categories/DiscordBlocks/autogen';
import { connect } from 'react-redux';
import Blockly from '../../modules/Blockly';
// import StarterCategory from './categories/DiscordBlocks/StarterCategory';

if (typeof Blockly.BlockSvg !== 'undefined') {
  Blockly.BlockSvg.START_HAT = true;
}

if (typeof Blockly.JavaScript !== 'undefined') {
  Blockly.JavaScript.addReservedWords('discordblocks');
  Blockly.JavaScript.addReservedWords('param1');
}

categoryDefinitions.map(category => Object.entries(category.blocks).map(([name, func]) => {
  let id = name.replace(/[ .]/g, '-').toLowerCase();

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
}))

const Tools = (props, ref) => {
  const enabledModules = props.document.modules;
  return (
    <xml is="xml" ref={ref}>
      <CoreCategory />
      <category is="category" name="Variables" custom="VARIABLE"></category>
      <category is="category" name="Functions" custom="PROCEDURE"></category>
      {/* <Category blocks={StarterCategory} name="Discord.js" /> */}
      <sep />
      <Category name="Discord.js" hidden={!enabledModules.includes('discordjs')}>
        {categoryDefinitions.map(category => <Category key={category.name} blocks={category.blocks} name={category.name} />)}
      </Category>
    </xml>
  )
}

const ToolBox = React.forwardRef(Tools);

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps, null, null, {
  forwardRef: true
})(ToolBox);
