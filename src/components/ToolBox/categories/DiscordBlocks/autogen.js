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

  if (discordjsClass.access !== 'private' || discordjsClass.name === 'MessageEmbed') {
    // If the class is a constructor, add a block for constructing
    if (discordjsClass.construct) {
      let numberOfParams = discordjsClass.construct.params.length;

      // Add blocks with an increasing number of parameters
      categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-constructor`] = {
        block: {
          init() {
            this.appendDummyInput()
              .appendField(`create a new ${discordjsClass.name.toLowerCase()}`)
            this.setOutput(true, null)
            this.setColour(colours.class)
            this.setTooltip(discordjsClass.description)
            this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.construct.name}`);
            this._enabledParams = []
            this._updateShape()
            this.setMutator(new Blockly.Mutator(discordjsClass.construct.params.map((val, index) => `com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-constructor-mutator-${index}`)))
          },
          mutationToDom() {
            const mutation = document.createElement('mutation');
            mutation.setAttribute('enabled-params', JSON.stringify(this._enabledParams))
            return mutation;
          },
          domToMutation(xml) {
            this._enabledParams = JSON.parse(xml.getAttribute('enabled-params'))
            this._updateShape()
          },
          decompose(workspace) {
            const containerBlock = workspace.newBlock(`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-constructor-mutator-container`);
            containerBlock.initSvg();
            let connection = containerBlock.getInput('STACK').connection;

            for (let enabledParam in this._enabledParams) {
              const itemBlock = workspace.newBlock(`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-constructor-mutator-${enabledParam}`);
              itemBlock.initSvg();
              connection.connect(itemBlock.previousConnection);
              connection = itemBlock.nextConnection;
            }
            return containerBlock
          },
          compose(containerBlock) {
            let itemBlock = containerBlock.getInputTargetBlock('STACK');
            this._enabledParams = [];

            while (itemBlock) {
              let numberString = /(\d+)$/.exec(itemBlock.type);
              if (numberString) {
                let number = parseInt(numberString[0], 10);
                if (!this._enabledParams.includes(number)) {
                  this._enabledParams.push(number)
                }
              }
              itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
            }

            console.log(this._enabledParams);
            this._updateShape();
          },
          _updateShape() {
            console.log('update', this._enabledParams)
            for (let i = 0; i < numberOfParams; i += 1) {
              const currentInput = this.getInput(`${i}`)

              if (!currentInput && this._enabledParams.includes(i)) {
                this.appendValueInput(`${i}`)
                  .setCheck(null)
                  .appendField(`${discordjsClass.props[i].name}`);
              }
              if (currentInput && !this._enabledParams.includes(i)) {
                this.removeInput(`${i}`)
              }
            }
          }
        },
        generator: function (block) {
          const enabledParams = block._enabledParams;
          let paramArray = [];
          
          for (let i = 0; i < numberOfParams; i += 1) {
            if (enabledParams.includes(i)) {
              paramArray.push(Blockly.JavaScript.valueToCode(block, `${i}`, Blockly.JavaScript.ORDER_ATOMIC) || 'undefined');
            } else {
              paramArray.push('undefined')
            }
          }

          return [
            `new Discord.${discordjsClass.construct.name}(${paramArray.join(',')})`,
            Blockly.JavaScript.ORDER_NONE
          ];
        }
      };

      categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-constructor-mutator-container`] = {
        block: {
          init() {
            this.setStyle('list_blocks');
            this.appendDummyInput()
              .appendField(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TITLE_ADD']);
            this.appendStatementInput('STACK');
            this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
            this.contextMenu = false;
          }
        }
      }

      for (let paramNumber = 0; paramNumber < numberOfParams; paramNumber += 1) {
        categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-constructor-mutator-${paramNumber}`] = {
          block: {
            init() {
              this.setStyle('list_blocks');
              this.appendDummyInput()
                .appendField(discordjsClass.props[paramNumber].name);
              this.setPreviousStatement(true);
              this.setNextStatement(true);
              this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP']);
              this.contextMenu = false;
            }
          }
        }
      }
    }

    if (discordjsClass.props) {
      // For each property of the class...
      discordjsClass.props
        .filter(method => method.access !== 'private')
        .forEach((prop) => {
          categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-prop-${prop.name}`] = {
            block: {
              init: function () {
                this.appendValueInput(prop.name)
                  .setCheck(null)
                  .appendField(`get ${prop.name}`);
                this.setOutput(true, null);
                this.setColour(colours.props);
                this.setTooltip(prop.description);
                this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.name.toLowerCase()}?scrollTo=${prop.name}`);
              }
            },
            generator: function () {
              return `.${prop.name}`;
            }
          }
        });
    }

    if (discordjsClass.methods) {
      discordjsClass.methods
        .filter(method => method.access !== 'private')
        .forEach((method) => {
          categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-method-${method.name}`] = {
            block: {
              init: function () {
                this.appendValueInput(method.name)
                  .setCheck(method.description)
                  .appendField(`${method.name}`);
                this.setOutput(true, null);
                this.setColour(colours.method);
                this.setTooltip('');
                this.setHelpUrl(`https://discord.js.org/#/docs/main/stable/class/${discordjsClass.name.toLowerCase()}?scrollTo=${method.name}`);
              }
            },
            generator: function () {
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
                categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-method-${method.name}-with-${numberOfParams}-params`] = {
                  block: {
                    init: function () {
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
                  generator: function () {
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
          categoryDefinition.blocks[`com_moustacheminer_discordjs_${discordjsClass.name.toLowerCase()}-event-${event.name}`] = {
            block: {
              init: function () {
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
            generator: function (block) {
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
