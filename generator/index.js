const documentation = require('./discord.js.json');
const fs = require('fs');
const js2xmlparser = require('js2xmlparser');

const url = 'https://discord.js.org/#/docs/main/stable/';
const colour = {
	construct: 160,
	prop: 230,
	method: 40,
	event: 100
};

const blockdef = [];
const gendef = [];
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
			blockdef.push(`
	Blockly.Blocks.${classy.name}_constructor = {
		init() {
			this.appendValueInput('${classy.name}')
				.setCheck('${classy.name}')
				.appendField('${classy.name}_constructor');
			this.setOutput(true, '${classy.name}');
			this.setColour(${colour.construct});
			this.setTooltip('${(classy.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
			this.setHelpUrl('${url}class/${classy.name}');
		}
	};
	`);
			gendef.push(`
	Blockly.JavaScript.${classy.name}_constructor = () => {
		const code = \`new Discord.${classy.name}()\`;
		return [code, Blockly.JavaScript.ORDER_NONE];
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
					blockdef.push(`
	Blockly.Blocks.${classy.name}_${curr.name} = {
		init() {
			this.appendValueInput('${classy.name}')
				.setCheck('${classy.name}')
				.appendField('get ${curr.name} of');
			this.setInputsInline(true);
			this.setOutput(true, ${curr.type[0].length === 1 ? `'${curr.type[0][0][0]}'` : JSON.stringify(curr.type[0].reduce((array, current) => { array.push(current[0]); return array; }, []))});
			this.setColour(${colour.prop});
			this.setTooltip('${(curr.description || '').replace(/\n/g, '\\n').replace(/'/g, '\\\'')}');
			this.setHelpUrl('${url}class/${classy.name}?scrollTo=${curr.name}');
		}
	};
	`);
					gendef.push(`
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
						// const returns = curr.returns.types || curr.returns;
						blockdef.push(`
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
				.setCheck('*');
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
						gendef.push(`
Blockly.JavaScript.${classy.name}_${curr.name} = (block) => {
	const ${classy.name} = Blockly.JavaScript.valueToCode(block, '${classy.name}', Blockly.JavaScript.ORDER_ATOMIC);
	${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`const ${current.name} = block.getFieldValue('${current.name}');`); return array; }, []).join('')}
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	const code = \`\${${classy.name}}.${curr.name}(${(curr.params || []).filter(current => !current.name.includes('.')).reduce((array, current) => { array.push(`\${${current.name}}`); return array; }, []).join()}) => {\${statements_function}});\`;
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
					blockdef.push(`
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
					gendef.push(`
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

/*
	Write the finished products to file
*/

fs.writeFile('js/discordblocks/blockdef.js', blockdef.join(''), (err) => {
	if (err) {
		console.dir(err);
	} else {
		console.log('blockdef saved!');
	}
});

fs.writeFile('js/discordblocks/gendef.js', gendef.join(''), (err) => {
	if (err) {
		console.dir(err);
	} else {
		console.log('gendef saved!');
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

console.log('Please ESlint before pushing commit.');
