Blockly.JavaScript['client_constructor'] = function(block) {
	const value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `new Discord.Client(${value_name})`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['clientoptions'] = function(block) {
	const statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
	// TODO: Assemble JavaScript into code variable.
	const code = `{${statements_name}}`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['clientoption_messagecachemaxsize'] = function(block) {
	const number_size = block.getFieldValue('size');
	// TODO: Assemble JavaScript into code variable.
	const code = `messageCacheMaxSize: ${number_size},`;
	return code;
};

Blockly.JavaScript['clientoption_shardcount'] = function(block) {
	const number_count = block.getFieldValue('count');
	// TODO: Assemble JavaScript into code variable.
	const code = `shardCount: ${number_count},`;
	return code;
};

Blockly.JavaScript['clientoption_shardid'] = function(block) {
	const number_id = block.getFieldValue('id');
	// TODO: Assemble JavaScript into code variable.
	const code = `shardId: ${number_id},`;
	return code;
};

Blockly.JavaScript['clientoption_apirequestmethod'] = function(block) {
	const dropdown_method = block.getFieldValue('method');
	// TODO: Assemble JavaScript into code variable.
	const code = `apiRequestMethod: '${dropdown_method}',`;
	return code;
};

Blockly.JavaScript['clientoption_messagecachelifetime'] = function(block) {
	const number_time = block.getFieldValue('time');
	// TODO: Assemble JavaScript into code variable.
	const code = `messageCacheLifetime: ${number_time},`;
	return code;
};

Blockly.JavaScript['clientoption_messagesweepinterval'] = function(block) {
	const number_interval = block.getFieldValue('interval');
	// TODO: Assemble JavaScript into code variable.
	const code = `messageSweepInterval: ${number_interval},`;
	return code;
};

Blockly.JavaScript['clientoption_fetchallmembers'] = function(block) {
	const dropdown_members = block.getFieldValue('members');
	// TODO: Assemble JavaScript into code variable.
	const code = `fetchAllMembers: ${dropdown_members},`;
	return code;
};

Blockly.JavaScript['clientoption_disableeveryone'] = function(block) {
	const dropdown_everyone = block.getFieldValue('everyone');
	// TODO: Assemble JavaScript into code variable.
	const code = `disableEveryone: ${dropdown_everyone},`;
	return code;
};

Blockly.JavaScript['clientoption_sync'] = function(block) {
	const dropdown_sync = block.getFieldValue('sync');
	// TODO: Assemble JavaScript into code variable.
	const code = `sync: ${dropdown_sync},`;
	return code;
};

Blockly.JavaScript['clientoption_restwsbridgetimeout'] = function(block) {
	const number_timeout = block.getFieldValue('timeout');
	// TODO: Assemble JavaScript into code variable.
	const code = `restWsBridgeTimeout: ${number_timeout},`;
	return code;
};

Blockly.JavaScript['clientoption_resttimeoffset'] = function(block) {
	const number_extra = block.getFieldValue('extra');
	// TODO: Assemble JavaScript into code variable.
	const code = `restTimeOffset: ${number_extra},`;
	return code;
};

Blockly.JavaScript['client_browser'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.browser`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_ping'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.ping`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_pings'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.pings`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_readytimestamp'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.readyTimestamp`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_status'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.status`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_token'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.token`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_uptime'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.uptime`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_user'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.user`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_on_message'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	const variable_message = block.getFieldValue('message')
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	// TODO: Assemble JavaScript into code variable.
	const code = `
		${value_client}.on('message', (${variable_message}) => {
			${statements_function}
		})`;
	return code;
};

Blockly.JavaScript['client_on_messagedelete'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	const variable_message = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('message'), Blockly.Variables.NAME_TYPE);
	const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
	// TODO: Assemble JavaScript into code variable.
	const code = `
${value_client}.on('message', (${variable_message}) => {
	${statements_function}
})`;
	return code;
};

Blockly.JavaScript['message_author'] = function(block) {
	const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_message}.author`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_channel'] = function(block) {
	const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_message}.channel`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_cleancontent'] = function(block) {
	const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_message}.cleanContent`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_client'] = function(block) {
	const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_message}.client`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_content'] = function(block) {
	const value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_message}.content`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['client_login'] = function(block) {
	const value_client = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	const value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_client}.login(${value_token})`;
	return code;
};

Blockly.JavaScript['send'] = function(block) {
	const value_channel = Blockly.JavaScript.valueToCode(block, 'client', Blockly.JavaScript.ORDER_ATOMIC);
	const value_message = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `${value_channel}.send(${value_message})`;
	return code;
};

Blockly.JavaScript['console_log'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `console.log(${value_text})`;
  return code;
};
