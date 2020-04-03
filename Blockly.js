const fs = require('fs');
const path = require('path')

const script = `
${fs.readFileSync(path.join(__dirname, '/src/modules/blockly/blockly_compressed.js'), {
  encoding: 'utf-8'
})}
${fs.readFileSync(path.join(__dirname, '/src/modules/blockly/blocks_compressed.js'), {
  encoding: 'utf-8'
})}
${fs.readFileSync(path.join(__dirname, '/src/modules/blockly/msg/js/en-gb.js'), {
  encoding: 'utf-8'
})}
${fs.readFileSync(path.join(__dirname, '/src/modules/blockly/javascript_compressed.js'), {
  encoding: 'utf-8'
})}
export default Blockly;
`

fs.writeFileSync('./src/modules/Blockly.js', script)
