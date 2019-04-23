import React, { Component } from 'react';
import ToolBox from './components/ToolBox';
import { Blockly } from './components/ToolBox/Category';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import './scss/index.scss';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.workspace = null;
  }
  componentDidMount() {
    this.workspace = Blockly.inject(document.getElementById('blockly'), {
      toolbox: document.getElementById('toolbox')
    }, {

    })
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resize);
      window.addEventListener('beforeunload', this.unload);
      this.resize();
    }
  }
  componentWillUnmount() {
    if (this.workspace) {
      this.workspace.dispose();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resize);
      window.removeEventListener('beforeunload', this.unload);
    }
  }
  resize() {
    if (this.workspace) {
      Blockly.svgResize(this.workspace);
      setTimeout(() => {
        Blockly.svgResize(this.workspace);
      }, 10)
    }
  }
  unload(e) {
    e.preventDefault();
    e.returnValue = '';
    return true;
  }
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="DiscordBlocks"
          titleTemplate="%s - DiscordBlocks"
        >
          <title>{this.props.document.name}</title>
        </Helmet>
        <NavigationBar />
        <ToolBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(App);
