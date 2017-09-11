// Things required for this to work
const documentation = require('./discord.js.json');
const js2xmlparser = require('js2xmlparser');
const uglify = require('uglify-es');
const fs = require('fs');

// Configuration
const url = 'https://discord.js.org/#/docs/main/stable/';
const colour = {
	construct: 160,
	prop: 230,
	method: 40,
	event: 100
};

const header = `/* eslint-disable */
// This file was automatically generated.
// DO NOT EDIT
// Copyright Moustacheminer Server Services 2015 - 2017
`;

let code = '';
const xml = {
	category: []
};

documentation.classes.forEach((classy) => {
	if (classy.access !== 'private') {
		const currclass = {
			'@': {
				name: classy.name
			},
			'#': '',
			block: []
		};

		// Constructor
		if (classy.construct) {
			code += (`
				Blockly.Blocks.${classy.name}_constructor = {
					init() {
						this.appendDummyInput()
							.appendField('Create a new ${classy.name}${classy.construct.params ? ' with' : ''}');
						${(classy.construct.params || []).filter(current => !current.name.includes('.')).reduce((string, current) => `
							${string}
							this.appendValueInput('${current.name}')
								.setCheck(null);
						`, '')}
						this.setInputsInline(true);
						this.setOutput(true, '${classy.name.charAt(0).toUpperCase() + classy.name.slice(1)}');
						this.setColour(${colour.construct});
						this.setTooltip('${(classy.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
						this.setHelpUrl('${url}class/${classy.name}');
					}
				};
			`);
			code += (`
				Blockly.JavaScript.${classy.name}_constructor = (block) => {
					const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
					${(classy.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`const ${current.name} = Blockly.JavaScript.valueToCode(block, '${current.name}', Blockly.JavaScript.ORDER_ATOMIC);`); return array; }, []).join('')}
					const code = \`new Discord.${classy.name}(${(classy.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`\${${current.name}}`); return array; }, []).join()});\n\`;
					return code;
				};
			`);
			currclass.block.push({
				'@': {
					type: `${classy.name}_constructor`
				},
				'#': ''
			});
		}

		// Properties
		if (classy.props) {
			classy.props.forEach((curr) => {
				if (curr.access !== 'private') {
					code += (`
	Blockly.Blocks.${classy.name}_${curr.name} = {
		init() {
			this.appendValueInput('${classy.name}')
				.setCheck('${classy.name}')
				.appendField('get ${curr.name} of');
			this.setInputsInline(true);
			this.setOutput(true, ${curr.type[0].length === 1 ? `'${curr.type[0][0][0].charAt(0).toUpperCase() + curr.type[0][0][0].slice(1)}'` : JSON.stringify(curr.type[0].reduce((array, current) => { array.push(current[0].charAt(0).toUpperCase() + current[0].slice(1)); return array; }, []))});
			this.setColour(${colour.prop});
			this.setTooltip('${(curr.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
			this.setHelpUrl('${url}class/${classy.name}?scrollTo=${curr.name}');
		}
	};
	`);
					code += (`
	Blockly.JavaScript.${classy.name}_${curr.name} = (block) => {
		const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
		const code = \`\${${classy.name}}.${curr.name}\`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	`);
					currclass.block.push({
						'@': {
							type: `${classy.name}_${curr.name}`
						},
						'#': ''
					});
				}
			});
		}

		// Methods
		if (classy.methods) {
			classy.methods.forEach((curr) => {
				if (curr.access !== 'private') {
					if (curr.returns) {
						const returnoutput = curr.returns.types || curr.returns;
						if (returnoutput[0][0][0] === 'Promise') {
							code += (`
								Blockly.Blocks.${classy.name}_${curr.name} = {
									init() {
										this.appendValueInput('${classy.name}')
											.setCheck('${classy.name}')
											.appendField('with');
										this.appendDummyInput()
											.appendField('${curr.name}${curr.params ? ' with' : ''}');
										${(curr.params || []).filter(current => !current.name.includes('.')).reduce((string, current) => `
											${string}
											this.appendValueInput('${current.name}')
												.setCheck(null);
										`, '')}
										this.setInputsInline(true);
										this.setPreviousStatement(true, null);
										this.setNextStatement(true, null);
										this.setColour(${colour.method});
										this.setTooltip('${(curr.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
										this.setHelpUrl('${url}class/${classy.name}?scrollTo=${curr.name}');
									}
								};
							`);
							code += (`
								Blockly.JavaScript.${classy.name}_${curr.name} = (block) => {
									const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
									${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`const ${current.name} = Blockly.JavaScript.valueToCode(block, '${current.name}', Blockly.JavaScript.ORDER_ATOMIC);`); return array; }, []).join('')}
									const code = \`\${${classy.name}}.${curr.name}(${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`\${${current.name}}`); return array; }, []).join()});\n\`;
									return code;
								};
							`);
						} else {
							code += (`
								Blockly.Blocks.${classy.name}_${curr.name} = {
									init() {
										this.appendValueInput('${classy.name}')
											.setCheck('${classy.name}')
											.appendField('with');
										this.appendDummyInput()
											.appendField('${curr.name}${curr.params ? ' with' : ''}');
										${(curr.params || []).filter(current => !current.name.includes('.')).reduce((string, current) => `
											${string}
											this.appendValueInput('${current.name}')
												.setCheck(null);
										`, '')}
										this.setInputsInline(true);
										this.setOutput(true, ${returnoutput[0].length === 1 ? `'${returnoutput[0][0][0].charAt(0).toUpperCase() + returnoutput[0][0][0].slice(1)}'` : JSON.stringify(returnoutput[0].reduce((array, current) => { array.push(current[0].charAt(0).toUpperCase() + current[0].slice(1)); return array; }, []))});
										this.setColour(${colour.method});
										this.setTooltip('${(curr.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
										this.setHelpUrl('${url}class/${classy.name}?scrollTo=${curr.name}');
									}
								};
							`);
							code += (`
								Blockly.JavaScript.${classy.name}_${curr.name} = (block) => {
									const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
									${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`const ${current.name} = Blockly.JavaScript.valueToCode(block, '${current.name}', Blockly.JavaScript.ORDER_ATOMIC);`); return array; }, []).join('')}
									const code = \`\${${classy.name}}.${curr.name}(${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`\${${current.name}}`); return array; }, []).join()});\n\`;
									return code;
								};
							`);
						}
					} else {
						code += (`
							Blockly.Blocks.${classy.name}_${curr.name} = {
								init() {
									this.appendValueInput('${classy.name}')
										.setCheck('${classy.name}')
										.appendField('with');
									this.appendDummyInput()
										.appendField('${curr.name}${curr.params ? ' with' : ''}');
									${(curr.params || []).filter(current => !current.name.includes('.')).reduce((string, current) => `
										${string}
										this.appendValueInput('${current.name}')
											.setCheck(null);
									`, '')}
									this.setInputsInline(true);
									this.setPreviousStatement(true, null);
									this.setNextStatement(true, null);
									this.setColour(${colour.method});
									this.setTooltip('${(curr.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
									this.setHelpUrl('${url}class/${classy.name}?scrollTo=${curr.name}');
								}
							};
						`);
						code += (`
							Blockly.JavaScript.${classy.name}_${curr.name} = (block) => {
								const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
								${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`const ${current.name} = Blockly.JavaScript.valueToCode(block, '${current.name}', Blockly.JavaScript.ORDER_ATOMIC);`); return array; }, []).join('')}
								const code = \`\${${classy.name}}.${curr.name}(${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`\${${current.name}}`); return array; }, []).join()});\n\`;
								return code;
							};
						`);
					}
					currclass.block.push({
						'@': {
							type: `${classy.name}_${curr.name}`
						},
						'#': ''
					});
				}
			});
		}

		// Events
		if (classy.events) {
			classy.events.forEach((curr) => {
				if (curr.access !== 'private') {
					code += (`
						Blockly.Blocks.${classy.name}_${curr.name} = {
							init() {
								this.appendValueInput('${classy.name}')
									.setCheck('${classy.name}')
									.appendField('when');
								this.appendDummyInput()
									.appendField('emits ${curr.name}')
									${(curr.params || []).reduce((string, current) => `${string}.appendField(new Blockly.FieldVariable('${current.name}'), '${current.name}')`, '')}
								this.appendStatementInput('function')
									.setCheck(null);
								this.setInputsInline(true);
								this.setPreviousStatement(true, null);
								this.setNextStatement(true, null);
								this.setColour(${colour.event});
								this.setTooltip('${(curr.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
								this.setHelpUrl('${url}class/${classy.name}?scrollTo=${curr.name}');
							}
						};
					`);
					code += (`
						Blockly.JavaScript.${classy.name}_${curr.name} = (block) => {
							const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
							${(curr.params || []).reduce((array, current) => { array.push(`const ${current.name} = block.getFieldValue('${current.name}');`); return array; }, []).join('')}
							const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
							const code = \`\${${classy.name}}.on('${curr.name}', (${(curr.params || []).reduce((array, current) => { array.push(`\${${current.name}}`); return array; }, []).join()}) => {\${statements_function}});\`;
							return code;
						};
					`);
					currclass.block.push({
						'@': {
							type: `${classy.name}_${curr.name}`
						},
						'#': ''
					});
				}
			});
		}

		xml.category.push(currclass);
	}
});

fs.writeFile('toolbox.xml', js2xmlparser.parse('xml', xml, {
	format: {
		doubleQuotes: true,
		indent: '\t',
		newline: '\n',
		pretty: true
	}
}), (err) => {
	if (err) {
		console.dir(err);
	} else {
		console.log('toolbox saved!');
	}
});

fs.writeFileSync('./js/discordblocks/output.js', header + code);

const uglified = uglify.minify(code);
fs.writeFileSync('./js/discordblocks/output-min.js', header + uglified.code);

console.log('Please move toolbox into HTML window');
