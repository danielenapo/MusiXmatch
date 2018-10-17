import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
      artist: '',
      lyric: ''
    };
  }

  onChangeSong = (event) => {
    this.setState({ song: event.target.value });
  }
  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = `a3cf1e63f020cea02a3ae9e1870958e8`;
    const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${this.state.song}&q_artist=${this.state.artist}&apikey=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ song:'', artist: '', lyric: data.message.body.lyrics.lyrics_body}))
      .catch(e => console.log('error', e));
  }

  render() {
    return (

      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p className="input">Song: <input value={this.state.song} onChange={this.onChangeSong} /></p>
          <p className="input">Artist: <input value={this.state.artist} onChange={this.onChangeArtist} /></p>
          <button>Search the song!</button>
        </form>

        <p className="testoh">{this.state.lyric}</p>

        <p>REQUISITI: installare i seguenti plugin per abilitare il CORS</p>
        <ul>
          <li> <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi"> chrome </a> </li>
          <li> <a href="https://addons.mozilla.org/it/firefox/addon/cors-everywhere/">firefox</a></li>
          <li> <a href="https://stackoverflow.com/questions/4556429/disabling-same-origin-policy-in-safari">safari</a></li>
      </ul>
      </div>
    );
  }
}

export default App;
