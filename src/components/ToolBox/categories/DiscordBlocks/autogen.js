import docs from './discord.js/12.1.1.json';
import Blockly from '../../../../modules/Blockly';

const categoryDefinitions = [];

const colours = {
  class: 160,
  props: 230,
  method: 40,
  events: 100
};

docs.classes.forEach((discordjsClass) => {
  const categoryDefinition = {
    name: discordjsClass.name,
    blocks: {}
  }

  if (discordjsClass.access !== 'private') {
    // If the class is a constructor, add a block for constructing
    if (discordjsClass.construct) {
      // Add blocks with an increasing number of parameters
      for (let numberOfParams = 0; numberOfParams <= discordjsClass.construct.params.length; numberOfParams += 1) {
        categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name}-constructor-${numberOfParams}`] = {
          block: {
            init: function() {
              this.appendDummyInput()
                  .appendField(`create a new ${discordjsClass.name}`)
              this.setOutput(true, null)
              this.setColour(colours.class)
              this.setTooltip(discordjsClass.description)
              this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.construct.name}`);
              for (let paramNumber = 0; paramNumber < numberOfParams; paramNumber += 1) {
                this.appendValueInput(discordjsClass.props[paramNumber].name)
                  .setCheck(null)
                  .appendField(`${paramNumber > 0 ? 'and ' : ''}with ${discordjsClass.props[paramNumber].name}`);
              }
            }
          },
          generator: function() {
            return `new Discord.${discordjsClass.construct.name}()`;
          }
        };
      }
    }

    if (discordjsClass.props) {
      // For each property of the class...
      discordjsClass.props
        .filter(method => method.access !== 'private')
        .forEach((prop) => {
          categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name}-prop-${prop.name}`] = {
            block: {
              init: function() {
                this.appendValueInput(prop.name)
                    .setCheck(null)
                    .appendField(`get ${prop.name}`);
                this.setOutput(true, null);
                this.setColour(colours.props);
                this.setTooltip(prop.description);
                this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.name}?scrollTo=${prop.name}`);
              }
            },
            generator: function() {
              return `.${prop.name}`;
            }
          }
        });
    }

    if (discordjsClass.methods) {
      discordjsClass.methods
        .filter(method => method.access !== 'private')
        .forEach((method) => {
          categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name}-method-${method.name}`] = {
            block: {
              init: function() {
                this.appendValueInput(method.name)
                    .setCheck(method.description)
                    .appendField(`${method.name}`);
                this.setOutput(true, null);
                this.setColour(colours.method);
                this.setTooltip('');
                this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.name}?scrollTo=${method.name}`);
              }
            },
            generator: function() {
              return `.${method.name}()`;
            }
          }

          // If there are any params, add them as well
          if (method.params) {
            for (let numberOfParams = 1; numberOfParams < method.params.length; numberOfParams += 1) {
              let skip = false;

              // If any of the potential parameters has a "." in it, skip it entirely
              for (let paramNumber = 0; paramNumber < numberOfParams; paramNumber += 1) {
                if (method.params[paramNumber].name.includes('.')) {
                  skip = true;
                }
              }

              if (!skip) {
                categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name}-method-${method.name}-with-${numberOfParams}-params`] = {
                  block: {
                    init: function() {
                      this.appendValueInput(method.name)
                          .setCheck(null)
                          .appendField(`${method.name}`);
                      this.setOutput(true, null);
                      this.setColour(colours.method);
                      this.setTooltip(method.description);
                      this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.name}?scrollTo=${method.name}`);
                      for (let paramNumber = 0; paramNumber < numberOfParams; paramNumber += 1) {
                        this.appendValueInput(method.params[paramNumber].name)
                          .setCheck(null)
                          .appendField(`${paramNumber > 0 ? 'and ' : ''}with ${method.params[paramNumber].name}`);
                      }
                    }
                  },
                  generator: function() {
                    return `.${method.name}()`;
                  }
                }
              }
            }
          }
        });
    }

    if (discordjsClass.events) {
      // For each property of the class...
      discordjsClass.events
        .filter(method => method.access !== 'private')
        .forEach((event) => {
          categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name}-event-${event.name}`] = {
            block: {
              init: function() {
                this.appendValueInput("thing")
                  .setCheck(null)
                  .appendField("when");
                this.appendDummyInput()
                  .appendField(`emits '${event.name}'`);
                this.appendStatementInput('statement')
                  .setCheck(null);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(colours.props);
                this.setTooltip(event.description);
                this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.name}?scrollTo=e-${event.name}`);
              }
            },
            generator: function(block) {
              const thing = Blockly.JavaScript.valueToCode(block, 'thing', Blockly.JavaScript.ORDER_ATOMIC);
              const statement = Blockly.JavaScript.statementToCode(block, 'statement');
              return `${thing}.on('${event.name}', () => {\n${statement}\n})\n`;
            }
          }
        });
    }
  }

  // Add the category if there are blocks defined for the category
  if (Object.keys(categoryDefinition.blocks).length > 0) {
    categoryDefinitions.push(categoryDefinition);
  }
});

export default categoryDefinitions;
