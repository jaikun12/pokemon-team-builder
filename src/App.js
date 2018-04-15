import React, { Component } from 'react';
import './App.css';
import Request from 'superagent';
import lodash from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      team: [],
      info: ''
    };
    this.addPokemon = this.addPokemon.bind(this);
  }

  componentWillMount(){
    this.search();
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

  addPokemon(){
    const newPokemon = {
      monster: this.state.pokemon,
      id: this.state.pokeId
    }

    this.setState({
      team: this.state.team.concat(newPokemon)
    });

  }


  render() {
    var pokemonId = this.state.pokeId;

    var pokemonName = lodash.map(this.state.pokemon, (dispPokemon) => {
      return <span>{dispPokemon.name}</span>;
    });

    var pokemonTypes = lodash.map(this.state.types, (pokeType) => {
      return <span>{pokeType.type.name},</span>;
    });

    var pokemonAbilities = lodash.map(this.state.abilities, (pokeAbilities) => {
      return <span>{pokeAbilities.ability.name},</span>;
    });

    // var pokemonStats = lodash.map(this.state.abilities, (pokeStats) => {
    //   return <p>{pokeStats.stat.name}: {pokeStats.base_stat}</p>;
             
    // });

    var sprite = this.state.sprite;
  
  
    return (
      <div className="App" id="main-div">
        <div className="pokeDex">
          <p>Pokemon Name: <input ref="query" onChange={(e) => {this.updateSearch();}} type="text" name="poke"/></p>
          <img src={sprite}/>
            <p>ID: {pokemonId}</p>
            <p>Name: {pokemonName}</p>
            <p>Abilities: {pokemonAbilities}</p>
            <p>Type: {pokemonTypes}</p>
          <button onClick={ this.addPokemon }> Add to my team</button>
        </div>

        <div id="header">
          <p>Hello Trainer! Welcome to the <span class="bold">Pokemon League</span>!</p>
          <p>Feel free to use this pokedex to build your team as you go on your journey.</p>
          <p>Good luck!</p>
        </div>
        <div className="poke-lineup">
          <h3>Pokemon Lineup</h3>
          <PokeList team={this.state.team} />
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

  class PokeList extends React.Component {
      constructor(props){
          super(props);
          const display = '';
          this.displayInfo = this.displayInfo.bind(this);
        }

      displayInfo(monster){
        this.display = monster;
      }

      render() {
          return (
              <ul className = "lineup">
                {this.props.team.map(team => (
                  <li key={team.id} onClick={ this.displayInfo(team.monster) }>
                  <img src={team.monster.sprites.front_default}/>
                  </li>
                ))}
              </ul>
          );
      }
    } 

  class PokeInfo extends React.Component {
      render() {
          return (
              <p>wololo</p>
          );
      }
  }


export default App;
