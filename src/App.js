import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import { Blockly } from './components/ToolBox/Category';
import './scss/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workspace: null
    }
    this.vscode = acquireVsCodeApi();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const workspace = Blockly.inject(document.getElementById('blockly'), {
      toolbox: document.getElementById('toolbox'),
      css: false
    })

    workspace.addChangeListener(this.onChange);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resize);
      this.resize();
    }

    const previousState = this.vscode.getState();
    if (previousState && previousState.xml) {
      const xml = Blockly.Xml.textToDom(previousState.xml);
      Blockly.Xml.domToWorkspace(xml, workspace)
    }

    this.setState({
      workspace
    })

    console.log(Blockly.Css)
  }
  componentWillUnmount() {
    if (this.state.workspace) {
      this.state.workspace.removeChangeListener(this.onChange)
      this.state.workspace.dispose();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resize);
    }
  }
  onChange() {
    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.state.workspace))
    this.vscode.setState({
      xml: xmlContent
    })
  }
  resize() {
    if (this.state.workspace) {
      Blockly.svgResize(this.state.workspace);
      setTimeout(() => {
        Blockly.svgResize(this.state.workspace);
      }, 10)
    }
  }
  render() {
    return (
      <ToolBox />
    )
  }
}

export default App;
