const documentation = require('./discord.js.json');
const fs = require('fs');
const js2xmlparser = require('js2xmlparser');

const url = 'https://discord.js.org/#/docs/main/stable/';
const colour = {
	construct: 160,
	prop: 230,
	methods: 40
};

const blockdef = [];
const gendef = [];
const xml = {
	category: []
};

documentation.classes.forEach((classy) => {
	const currclass = {
		'@': {
			name: classy.name
		},
		'#': '',
		block: []
	};

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
		});
	}

	xml.category.push(currclass);
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

console.log('Completed! Please ESlint before pushing commit.');
