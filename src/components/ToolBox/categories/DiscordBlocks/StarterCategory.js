import Blockly from 'node-blockly/browser';

const StarterCategory = {
  name: 'Starter',
  blocks: {
    'com_moustacheminer_discordblocks_client-login': {
      block: {
        init() {
          this.appendValueInput("token")
            .setCheck("String")
            .appendField("connect with token");
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      },
      generator(block) {
        var value_name = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
        var code = `discordblocks.client.login('${value_name}');\n`;
        return code;
      }
    },
    'com_moustacheminer_discordblocks_on-message': {
      block: {
        init() {
          this.appendDummyInput()
              .appendField("on message");
          this.appendStatementInput("statements")
              .setCheck(null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      },
      generator(block) {
        var statements = Blockly.JavaScript.statementToCode(block, 'statements');
        // TODO: Assemble JavaScript into code variable.
        var code = `discordblocks.client.on('message', () => {\n${statements}\n});\n`;
        return code;
      }
    },
    'com_moustacheminer_discordblocks_message-reply-then-but': {
      block: {
        init() {
          this.appendValueInput('input')
              .setCheck("String")
              .appendField("reply to message with the text");
          this.appendStatementInput("then")
              .setCheck(null)
              .appendField("afterwards");
          this.appendStatementInput("but")
              .setCheck(null)
              .appendField("but on error");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      },
      generator(block) {
        var value = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
        var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
        var statements_but = Blockly.JavaScript.statementToCode(block, 'but');
        // TODO: Assemble JavaScript into code variable.
        var code = `discordblocks.message.reply('${value}')\n.then(() => {\n${statements_then}\n})\n.catch(() => {\n${statements_but}\n})\n`;
        return code;
      }
    },
    'com_moustacheminer_discordblocks_message-contents': {
      block: {
        init: function() {
          this.appendDummyInput()
            .appendField("message contents");
          this.setOutput(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      },
      generator(block) {
        return ['discordblocks.message.contents', Blockly.JavaScript.ORDER_NONE]
      }
    }
  }
};

export default StarterCategory;