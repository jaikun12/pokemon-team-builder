import React, { Component } from 'react';
import './App.css';
import Request from 'superagent';
import lodash from 'lodash';

class App extends Component {
  constructor(){
    super();
    this.state={
      text: "initial text"
    };
  }

  componentWillMount(){
    this.search();
  }

  fetchPokemon(pokemon){
    
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillUpdate(nextProps, nextState){

  }

  componentWillUnmount(){

  }

  updateSearch(){
    this.search(this.refs.query.value);
  }

  render() {
    var pokemonId = this.state.pokeId;

    var pokemonName = lodash.map(this.state.pokemon, (dispPokemon) => {
      return <p>{dispPokemon.name}</p>;
    });

    var pokemonTypes = lodash.map(this.state.types, (pokeType) => {
      return <p>{pokeType.type.name}</p>;
    });

    var pokemonAbilities = lodash.map(this.state.abilities, (pokeAbilities) => {
      return <p>{pokeAbilities.ability.name}</p>;
    });

    // var pokemonStats = lodash.map(this.state.abilities, (pokeStats) => {
    //   return <p>{pokeStats.stat.name}: {pokeStats.base_stat}</p>;
             
    // });

    var sprite = this.state.sprite;
  
  
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
          <p>Pokemon Name: <input ref="query" onChange={(e) => {this.updateSearch();}} type="text" name="poke"/></p>
          <img src={sprite}/>
          {pokemonId}
          {pokemonName}
          {pokemonAbilities}
          {pokemonTypes}

        </div>

        <div className="poke-info">
          <h3>Pokemon Data</h3>
        </div>

      </div>
    );
  }

  search(query){
    try{
      var url = "https://pokeapi.co/api/v2/pokemon/";
      var finUrl = url + query;
      Request.get(finUrl).then((response) => {
        this.setState({
          pokemon: response.body,
          sprite: response.body.sprites.front_default,
          baseExp: response.body.base_experience,
          pokeId: response.body.id,
          abilities: response.body.abilities,
          types: response.body.types,
          stats: response.body.stats
      });
    });
    }
    catch(err){
      console.log(err);
    }
    
  }
}


export default App;
