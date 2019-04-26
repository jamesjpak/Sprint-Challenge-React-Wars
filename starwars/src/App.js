import React, { Component } from 'react';
import './App.css';

import Character from '../src/Character'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      character: {
        name: '',
        species: '',
        birth_year: '',
        gender: ''
      }
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        
        <h1 className="Header">REACT WARS</h1>

        <div className = "character-list">
          {this.state.starwarsChars.map(character => (
            <Character character={character} key={character.banana} />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
