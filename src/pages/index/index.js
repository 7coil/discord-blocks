import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>DiscordBlocks</h1>
        <h2>Block Based Programming Software</h2>
        <p>Learn how code! (not guaranteed)</p>
        <Link to="/edit">Get Started</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(IndexPage);
