import 'electron-react-titlebar/assets/style.css';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import BlocklyComponent from '../../components/BlocklyComponent';
import NavigationBar from '../../components/NavigationBar';
import Toasts from '../../components/Toasts';
import ToolBox from '../../components/ToolBox';

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.toolbox = React.createRef();
    this.onCreated = this.onCreated.bind(this);

    this.state = {
      workspace: null
    }
  }

  onCreated({ workspace }) {
    this.setState({
      workspace
    })
  }

  render() {
    return (
      <>
        <Helmet
          defaultTitle="DiscordBlocks"
          titleTemplate="%s - DiscordBlocks"
        >
          <title>{this.props.document.name}</title>
        </Helmet>
        <NavigationBar workspace={this.state.workspace} />
        <ToolBox ref={this.toolbox}/>
        <BlocklyComponent toolbox={this.toolbox} onCreated={this.onCreated}/>
        <Toasts />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(EditPage);
