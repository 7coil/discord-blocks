Blockly.Blocks.console_log = {
	init() {
		this.appendValueInput('text')
			.setCheck(null)
			.appendField('log');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(160);
		this.setTooltip('Outputs a message to the Web Console.');
		this.setHelpUrl('https://developer.mozilla.org/en/docs/Web/API/Console/log');
	}
};

Blockly.JavaScript.console_log = (block) => {
	const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `console.log(${value_text});\n`;
	return code;
};

Blockly.Blocks.eval = {
	init() {
		this.appendValueInput('text')
			.setCheck(null)
			.appendField('eval');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(300);
		this.setTooltip('The eval() function evaluates JavaScript code represented as a string.');
		this.setHelpUrl('https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval');
	}
};

Blockly.JavaScript.eval = (block) => {
	const value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `eval(${value_text});\n`;
	return code;
};

Blockly.Blocks.mss_object = {
	init() {
		this.appendDummyInput()
			.appendField('Create new Object');
		this.setOutput(true, 'Object');
		this.setColour(300);
		this.setTooltip('The Object constructor creates an object wrapper.');
		this.setHelpUrl('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object');
	}
};

Blockly.JavaScript.mss_object = () => {
	const code = '{}';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.mss_object_set = {
	init() {
		this.appendValueInput('object')
			.setCheck('Object')
			.appendField('with');
		this.appendValueInput('token')
			.setCheck(null)
			.appendField('set key')
			.appendField(new Blockly.FieldTextInput('key'), 'key')
			.appendField('as');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(300);
		this.setTooltip('Set a specific key in an object.');
		this.setHelpUrl('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object');
	}
};

Blockly.JavaScript.mss_object_set = (block) => {
	const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
	const text_key = block.getFieldValue('key');
	const value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${value_object}['${text_key.replace(/'/g, '\\\'')}'] = ${value_token};\n`;
	return code;
};

Blockly.Blocks.mss_property_get = {
	init() {
		this.appendValueInput('object')
			.setCheck(null)
			.appendField('get key')
			.appendField(new Blockly.FieldTextInput('key'), 'key')
			.appendField('of');
		this.setOutput(true, null);
		this.setColour(300);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.JavaScript.mss_property_get = (block) => {
	const text_key = block.getFieldValue('key');
	const value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
	const code = `${value_object}['${text_key.replace(/'/g, '\\\'')}']`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.mss_client_post = {
	init() {
		this.appendValueInput('client')
			.setCheck('Client')
			.appendField('With');
		this.appendDummyInput()
			.appendField('post guild count to')
			.appendField(new Blockly.FieldDropdown([['bots.discord.pw', 'bots.discord.pw'], ['discordbots.org', 'discordbots.org']]), 'website')
			.appendField('with')
			.appendField(new Blockly.FieldTextInput('token'), 'token');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(40);
		this.setTooltip('Post your bot count to either bots.discord.pw or discordbots.org');
		this.setHelpUrl('https://bots.discord.pw/api');
	}
};

Blockly.JavaScript.mss_client_post = (block) => {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	const dropdown_website = block.getFieldValue('website');
	const text_token = block.getFieldValue('token');

	const code = `if (${value_client}.browser) {
	console.error('Posting bot statistics is not yet allowed, because of cross site and XMLHttpRequest preflight problems.');
	//	$.ajax({
	//		method: 'POST',
	//		url: \`https://${dropdown_website}/api/bots/\${${value_client}.user.id}/stats\`,
	//		data: JSON.stringify({
	//			server_count: ${value_client}.guilds.size
	//		}),
	//		headers: {
	//			Authorization: '${text_token}'
	//		},
	//		success: (data) => {
	//			console.log(data);
	//		}
	//	})
} else {
	const postData = JSON.stringify({
		server_count: ${value_client}.guilds.size
	});

	const options = {
		hostname: '${dropdown_website}',
		path: \`/api/bots/\${${value_client}.user.id}/stats\`,
		method: 'POST',
		headers: {
			'User-Agent': 'DiscordBot (https://moustacheminer.com/discord-blocks, 2017-09-14) DiscordBlocks',
			'Content-Type': 'application/json',
			'Content-Length': postData.length,
			Authorization: '${text_token}'
		}
	};

	const req = https.request(options, (res) => {
		res.on('data', (data) => {
			console.log(data.toString('utf8'));
		});
	});

	req.on('error', (error) => {
		console.error(error);
	});

	req.write(postData);
	req.end();
}
`;
	return code;
};
