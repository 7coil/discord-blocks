import docs from './discord.js/11.4.2.json';

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
        categoryDefinition.blocks[`constructor-${numberOfParams}`] = {
          block: {
            init: function() {
              this.appendDummyInput()
                  .appendField(`create a new ${discordjsClass.construct.name}`)
              this.setOutput(true, null)
              this.setColour(colours.class)
              this.setTooltip('')
              this.setHelpUrl('');
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
          categoryDefinition.blocks[`prop-${prop.name}`] = {
            block: {
              init: function() {
                this.appendValueInput(prop.name)
                    .setCheck(null)
                    .appendField(`get ${prop.name}`);
                this.setOutput(true, null);
                this.setColour(colours.props);
                this.setTooltip('');
                this.setHelpUrl('');
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
          categoryDefinition.blocks[`method-${method.name}`] = {
            block: {
              init: function() {
                this.appendValueInput(method.name)
                    .setCheck(null)
                    .appendField(`${method.name}`);
                this.setOutput(true, null);
                this.setColour(colours.method);
                this.setTooltip('');
                this.setHelpUrl('');
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
                categoryDefinition.blocks[`method-${method.name}-${numberOfParams}`] = {
                  block: {
                    init: function() {
                      this.appendValueInput(method.name)
                          .setCheck(null)
                          .appendField(`${method.name}`);
                      this.setOutput(true, null);
                      this.setColour(colours.method);
                      this.setTooltip('');
                      this.setHelpUrl('');
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
  }

  // Add the category if there are blocks defined for the category
  if (Object.keys(categoryDefinition.blocks).length > 0) {
    categoryDefinitions.push(categoryDefinition);
  }
});

export default categoryDefinitions;
