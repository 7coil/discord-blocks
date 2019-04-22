import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import { Blockly } from './components/ToolBox/Category';

import './scss/index.scss';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.workspace = null;
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    this.workspace = Blockly.inject(document.getElementById('blockly'), {
      toolbox: document.getElementById('toolbox')
    })
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resize);
      this.resize();
    }
  }
  componentWillUnmount() {
    if (this.workspace) {
      this.workspace.dispose();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resize);
    }
  }
  resize() {
    Blockly.svgResize(this.workspace);
    setTimeout(() => {
      Blockly.svgResize(this.workspace);
    }, 10)
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <ToolBox />
      </div>
    )
  }
}

export default App;
