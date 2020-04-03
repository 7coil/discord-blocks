import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TransportSignTitle from '../../components/TransportSignTitle';
import TransportSignBadge from '../../components/TransportSignBadge';
import TransportSign from '../../components/TransportSign';

import styles from './index.scss';
import picture from './firefox_PRVJSwMtRm.png';

const places = [
  {
    label: 'Shopmobility',
    style: 'white',
    link: 'https://www.google.com/maps/search/shopmobility/@54.6284018,-5.944877,7z'
  },{
    label: 'Top Secret Bunker',
    style: 'attraction',
    link: 'https://secretnuclearbunker.com/'
  },{
    label: 'Chessington World of Adventures',
    style: 'attraction',
    link: 'https://www.chessington.com/'
  },{
    label: 'Tower of London',
    style: 'attraction',
    link: 'https://www.hrp.org.uk/tower-of-london/'
  },{
    label: 'Newport Transporter Bridge',
    style: 'attraction',
    link: 'https://www.newport.gov.uk/heritage/Transporter-Bridge/Transporter-Bridge.aspx'
  },{
    label: 'Queen Elizabeth Olympic Park',
    style: 'attraction',
    link: 'https://www.queenelizabetholympicpark.co.uk'
  }
]

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: null,
      style: null
    }
  }

  componentDidMount() {
    const place = places[Math.floor(Math.random() * places.length)]

    this.setState(place)
  }

  render() {
    return (
      <main>
        <header>
          <span>// TODO: Enter a header for the user to navigate between pages</span>
        </header>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronContent}>
            <h1>DiscordBlocks</h1>
            <p>
              An easy to use* block based Discord Bot creator and editor, based on Discord.js and Google Blockly<br />
              <small>*citation needed</small>
            </p>
          </div>
          <img src={picture} className={styles.jumbotronImage}/>
          <div className={styles.jumbotronLinks}>
            <Link to="/edit">Enter the Editor</Link>
          </div>
        </div>
        <div>
          <span>// TODO: Enter some examples that users can click on here</span>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            Copyright Leondro Lio, 2017 - 2019
          </div>
        </footer>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(IndexPage);
