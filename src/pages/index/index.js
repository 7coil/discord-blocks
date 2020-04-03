import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TransportSignTitle from '../../components/TransportSignTitle';
import TransportSignBadge from '../../components/TransportSignBadge';
import TransportSign from '../../components/TransportSign';

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
      <div style={{
        width: '100%',
        fontSize: '1.3em',
        padding: '1em',
      }}>
        <TransportSign>
          <TransportSignTitle>
            <h2>DiscordBlocks (Alpha)</h2>
          </TransportSignTitle>
          <Link to="/edit">Enter the Editor →</Link>
          <a href="https://github.com/7coil/discord-blocks">Source Code <TransportSignBadge type="a">github.com</TransportSignBadge> →</a>
          {this.state.label &&
            this.state.link ?
              <a href={this.state.link}><TransportSignBadge type={this.state.style}>← {this.state.label}</TransportSignBadge></a> :
              <TransportSignBadge type={this.state.style}>← {this.state.label}</TransportSignBadge>
          }
        </TransportSign>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { document } = state;
  return { document };
}

export default connect(mapStateToProps)(IndexPage);
