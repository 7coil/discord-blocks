import React, { Component } from 'react';
import Blockly from '../../modules/Blockly';

import styles from './index.scss';

class BlocklyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workspace: null,
      blocklyDiv: null,
    }
    this.resize = this.resize.bind(this);
    this.newPositionDiv = React.createRef();
  }
  componentDidMount() {
    const blocklyDiv = document.createElement('div');
    blocklyDiv.classList.add(styles.blockly)

    if (typeof window !== 'undefined') {
      window.document.body.appendChild(blocklyDiv);
    }

    const workspace = Blockly.inject(blocklyDiv, {
      toolbox: this.props.toolbox.current
    })

    this.setState({
      workspace,
      blocklyDiv
    })

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resize);
      this.resize();

      window.workspace = workspace;
      window.toolbox = this.props.toolbox.current;
    }

    if (typeof this.props.onCreated === 'function') {
      this.props.onCreated({
        workspace
      })
    }
  }
  componentWillUnmount() {
    if (this.state.workspace) {
      this.state.workspace.dispose();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resize);
      window.document.body.removeChild(this.state.blocklyDiv)
    }
  }
  resize() {
    // Overlay the Blockly component
    if (this.state.blocklyDiv) {
      this.state.blocklyDiv.style.top = `${this.newPositionDiv.current.offsetTop}px`;
      this.state.blocklyDiv.style.left = `${this.newPositionDiv.current.offsetLeft}px`;
      this.state.blocklyDiv.style.width = `${this.newPositionDiv.current.clientWidth}px`;
      this.state.blocklyDiv.style.height = `${this.newPositionDiv.current.clientHeight}px`;
    } else {
      setTimeout(() => {
        this.resize();
      }, 10)
    }
    
    if (this.state.workspace) {
      Blockly.svgResize(this.state.workspace);
    }
  }
  render() {
    return (
      <div ref={this.newPositionDiv} style={{width: '100vw', height: '100%'}}></div>
    )
  }
}


export default BlocklyComponent;
