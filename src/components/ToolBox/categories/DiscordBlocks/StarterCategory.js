import Blockly from 'node-blockly/browser';

const StarterCategory = {
  name: 'Starter',
  blocks: {
    on_message: {
      block: {
        init: function() {
          this.appendDummyInput()
              .appendField("on message");
          this.appendStatementInput("statements")
              .setCheck(null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      },
      generator: function(block) {
        var statements = Blockly.JavaScript.statementToCode(block, 'statements');
        // TODO: Assemble JavaScript into code variable.
        var code = `discordblocks.client.on('message', () => {\n${statements}\n});\n`;
        return code;
      }
    },
    message_reply: {
      block: {
        init: function() {
          this.appendValueInput('input')
              .setCheck("String")
              .appendField("reply to message");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      },
      generator: function(block) {
        var value = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = `discordblocks.message.reply('${value}')`;
        return code;
      }
    }
  }
};

export default StarterCategory;