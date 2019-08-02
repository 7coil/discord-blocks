import fs from 'fs';

const script = `
(() => {
  ${fs.readFileSync(__dirname + '/blockly/blockly_compressed.js', {
    encoding: 'utf-8'
  })}
  ${fs.readFileSync(__dirname + '/blockly/blocks_compressed.js', {
    encoding: 'utf-8'
  })}
  ${fs.readFileSync(__dirname + '/blockly/msg/js/en-gb.js', {
    encoding: 'utf-8'
  })}
  ${fs.readFileSync(__dirname + '/blockly/javascript_compressed.js', {
    encoding: 'utf-8'
  })}
  return Blockly;
})()
`

const Blockly = eval(script);

export default Blockly;
