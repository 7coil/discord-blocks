const documentation = require('./discord.js.json');
const fs = require('fs');

const url = 'https://discord.js.org/#/docs/main/stable/';
const colour = {
	construct: 160,
	prop: 230,
	methods: 40
};

const blockdef = [];

documentation.classes.forEach((classy) => {
	if (classy.construct) {
		blockdef.push({
			type: `${classy.name}_constructor`,
			message0: `${classy.name}_constructor`,
			output: classy.name,
			colour: colour.construct,
			tooltip: classy.description,
			helpURL: `${url}class/${classy.name}`
		});
	}

	// Properties
	if (classy.props) {
		classy.props.forEach((curr) => {
			blockdef.push({
				type: `${classy.name}_${curr.name}`,
				message0: `%1 ${classy.name}_${curr.name}`,
				args0: [
					{
						type: 'input_value',
						name: classy.name,
						check: classy.name
					}
				],
				output: curr.type[0].length === 1 ? curr.type[0][0][0] : curr.type[0].reduce((array, current) => {
					array.push(current[0]);
					return array;
				}, []),
				colour: colour.prop,
				tooltip: curr.description,
				helpURL: `${url}class/${classy.name}?scrollTo=${curr.name}`
			});
		}, []);
	}

	if (classy.methods) {
		classy.methods.forEach((curr) => {
			blockdef.push({
				type: `${classy.name}_${curr.name}`,
				message0: `%1 ${classy.name}_${curr.name}`,
				args0: [
					{
						type: 'input_value',
						name: classy.name,
						check: classy.name
					}
				],
				colour: colour.methods,
				tooltip: curr.description,
				helpURL: `${url}class/${classy.name}?scrollTo=${curr.name}`
			});
		});
	}
});

fs.writeFile('blockdef.json', JSON.stringify(blockdef), (err) => {
	if (err) {
		console.dir(err);
	} else {
		console.log('Complete!');
	}
});
