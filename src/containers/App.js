import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import ChangePage from '../components/ChangePage';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
  constructor() {
    super ()
    this.state = {
      chars: [],
      info: [],
      fPage: '', // Futuristic Page
      page: 1  // current Page
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(character => this.setState({ chars: character.results, info: character.info}));
      console.log("componentmounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fPage !== this.state.fPage) {
      fetch(this.state.fPage)
      .then(response => response.json())
      .then(character => this.setState({ chars: character.results, info: character.info}));

      this.setState({page: this.state.fPage.substr(48, this.state.fPage.length)})
      //show current page
      console.log(this.state.info);
    }
  }
  render() {
    const {chars, page, info} = this.state;


    return (
      <div>
        <ChangePage 
          prevPage={() => this.setState({fPage: info.prev})} 
          nextPage={() => this.setState({fPage: info.next})}
          move="Next" 
          info={info}
        />
        <h2>{page}</h2>
        <ErrorBoundry>
          <CardList chars={chars}/>
        </ErrorBoundry> 
      </div>
    );
  }

}

export default App;
