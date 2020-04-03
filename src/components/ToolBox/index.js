import React from 'react';
import Category from './Category';
import CoreCategory from './categories/CoreCategory';
import categoryDefinitions from './categories/DiscordBlocks/autogen';
import StarterCategory from './categories/DiscordBlocks/StarterCategory';


const ToolBox = React.forwardRef((props, ref) => (
    <xml is="xml" ref={ref}>
      <CoreCategory />
      <category is="category" name="Variables" custom="VARIABLE"></category>
      <category is="category" name="Functions" custom="PROCEDURE"></category>
      <Category blocks={StarterCategory} name="Discord.js">
        <category is="category" name="For Pro Developers">
          {categoryDefinitions.map(category => <Category key={category.name} blocks={category} />)}
        </category>
      </Category>
    </xml>
));

export default ToolBox;
