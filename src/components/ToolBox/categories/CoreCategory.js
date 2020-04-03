import React from 'react';
import { Block } from '../Block';
import Blockly from '../../../modules/Blockly'

const CoreCategory = () => (
  <>
    <category is="category" name="Logic">
      <category is="category" name="If">
        <block is="block" type="controls_if"></block>
        <block is="block" type="controls_if">
          <mutation is="mutation" else="1"></mutation>
        </block>
        <block is="block" type="controls_if">
          <mutation is="mutation" elseif="1" else="1"></mutation>
        </block>
      </category>
      <category is="category" name="Boolean">
        <block is="block" type="logic_compare"></block>
        <block is="block" type="logic_operation"></block>
        <block is="block" type="logic_negate"></block>
        <block is="block" type="logic_boolean"></block>
        <block is="block" type="logic_null"></block>
        <block is="block" type="logic_ternary"></block>
      </category>
    </category>
    <category is="category" name="Loops">
      <block is="block" type="controls_repeat_ext">
        <value is="value" name="TIMES">
          <block is="block" type="math_number">
            <field is="field" name="NUM">10</field>
          </block>
        </value>
      </block>
      <block is="block" type="controls_whileUntil"></block>
      <block is="block" type="controls_for">
        <field is="field" name="VAR">i</field>
        <value is="value" name="FROM">
          <block is="block" type="math_number">
            <field is="field" name="NUM">1</field>
          </block>
        </value>
        <value is="value" name="TO">
          <block is="block" type="math_number">
            <field is="field" name="NUM">10</field>
          </block>
        </value>
        <value is="value" name="BY">
          <block is="block" type="math_number">
            <field is="field" name="NUM">1</field>
          </block>
        </value>
      </block>
      <block is="block" type="controls_forEach"></block>
      <block is="block" type="controls_flow_statements"></block>
    </category>
    <category is="category" name="Mathematics">
      <block is="block" type="math_number"></block>
      <block is="block" type="math_arithmetic"></block>
      <block is="block" type="math_single"></block>
      <block is="block" type="math_trig"></block>
      <block is="block" type="math_constant"></block>
      <block is="block" type="math_number_property"></block>
      <block is="block" type="math_round"></block>
      <block is="block" type="math_on_list"></block>
      <block is="block" type="math_modulo"></block>
      <block is="block" type="math_constrain">
        <value is="value" name="LOW">
          <block is="block" type="math_number">
            <field is="field" name="NUM">1</field>
          </block>
        </value>
        <value is="value" name="HIGH">
          <block is="block" type="math_number">
            <field is="field" name="NUM">100</field>
          </block>
        </value>
      </block>
      <block is="block" type="math_random_int">
        <value is="value" name="FROM">
          <block is="block" type="math_number">
            <field is="field" name="NUM">1</field>
          </block>
        </value>
        <value is="value" name="TO">
          <block is="block" type="math_number">
            <field is="field" name="NUM">100</field>
          </block>
        </value>
      </block>
      <block is="block" type="math_random_float"></block>
    </category>
    <category is="category" name="Arrays">
      <block is="block" type="lists_create_with">
        <mutation is="mutation" items="0"></mutation>
      </block>
      <block is="block" type="lists_create_with"></block>
      <block is="block" type="lists_repeat">
        <value is="value" name="NUM">
          <shadow is="shadow" type="math_number">
            <field is="field" name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block is="block" type="lists_length"></block>
      <block is="block" type="lists_isEmpty"></block>
      <block is="block" type="lists_indexOf">
        <value is="value" name="VALUE">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;listVariable&#125;</field>
          </block>
        </value>
      </block>
      <block is="block" type="lists_getIndex">
        <value is="value" name="VALUE">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;listVariable&#125;</field>
          </block>
        </value>
      </block>
      <block is="block" type="lists_setIndex">
        <value is="value" name="LIST">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;listVariable&#125;</field>
          </block>
        </value>
      </block>
      <block is="block" type="lists_getSublist">
        <value is="value" name="LIST">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;listVariable&#125;</field>
          </block>
        </value>
      </block>
      <block is="block" type="lists_split">
        <value is="value" name="DELIM">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block is="block" type="lists_sort"></block>
    </category>
    <category is="category" name="Strings">
      <block is="block" type="text"></block>
      <block is="block" type="text_join"></block>
      <block is="block" type="text_append">
        <value is="value" name="TEXT">
          <shadow is="shadow" type="text"></shadow>
        </value>
      </block>
      <block is="block" type="text_length">
        <value is="value" name="VALUE">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block is="block" type="text_isEmpty">
        <value is="value" name="VALUE">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block is="block" type="text_indexOf">
        <value is="value" name="VALUE">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;textVariable&#125;</field>
          </block>
        </value>
        <value is="value" name="FIND">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block is="block" type="text_charAt">
        <value is="value" name="VALUE">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;textVariable&#125;</field>
          </block>
        </value>
      </block>
      <block is="block" type="text_getSubstring">
        <value is="value" name="STRING">
          <block is="block" type="variables_get">
            <field is="field" name="VAR">&#123;textVariable&#125;</field>
          </block>
        </value>
      </block>
      <block is="block" type="text_changeCase">
        <value is="value" name="TEXT">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block is="block" type="text_trim">
        <value is="value" name="TEXT">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      {/* <block is="block" type="console_log">
        <value is="value" name="text">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block> */}
      <block is="block" type="text_print">
        <value is="value" name="TEXT">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block is="block" type="text_prompt_ext">
        <value is="value" name="TEXT">
          <shadow is="shadow" type="text">
            <field is="field" name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <Block name="com_moustacheminer_blockly_string_begins" func={{
        block: {
          init() {
            this.appendDummyInput()
              .appendField("in text");
            this.appendValueInput("string")
              .setCheck("String");
            this.appendDummyInput()
              .appendField("contains");
            this.appendValueInput("substring")
              .setCheck("String");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour('%{BKY_TEXTS_HUE}');
            this.setTooltip("");
            this.setHelpUrl("");
          }
        },
        generator(block) {
          var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);
          var value_substring = Blockly.JavaScript.valueToCode(block, 'substring', Blockly.JavaScript.ORDER_ATOMIC);
          // TODO: Assemble JavaScript into code variable.
          var code = `${value_string}.includes('${value_substring}')`;
          // TODO: Change ORDER_NONE to the correct strength.
          return [code, Blockly.JavaScript.ORDER_NONE];
        }
      }} />
    </category>
  </>
)

export default CoreCategory;
