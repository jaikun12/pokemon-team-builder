import React, { Component } from 'react';

class PokeDexPreview extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <h1>Pokemon League</h1>
        </div>
        <div className="poke-lineup">
          <h3>Pokemon Lineup</h3>
        </div>

        <div className="pokeDex">
          <h3>PokeDex</h3>
          <p>Hi Trainer! Use this PokeDex to search for your pokemon!</p>
        </div>

        <div className="poke-info">
          <h3>Pokemon Data</h3>
        </div>

      </div>
    );
  }
}

class PokeLineup extends Component{

}



export default App;
