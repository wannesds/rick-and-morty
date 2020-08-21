import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import ChangePage from '../components/ChangePage';
import ErrorBoundry from '../components/ErrorBoundry';
import Filter from '../components/Filter';

import  {quotes } from '../quotes.js';


class App extends Component {
  constructor() {
    super ()
    this.state = {
      chars: [], 
      info: [], 
      fPage: '', // Future Page
      page: 1,  // Current Page (by default 1)
      query: '',
      quotes: quotes
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(character => this.setState({ chars: character.results, info: character.info}));

    // fetch('../quotes.js')
    //   .then(response => response.json())
    //   .then(quotes => this.setState({ quotes: quotes}));
    //  // default fetch
  }

  componentDidUpdate(prevProps, prevState) {//use useEffect!!!
    const {fPage, page, info} = this.state;

    if (prevState.fPage !== fPage) { //check for changes
      if (fPage === info.prev) { //changes current page before new fetch
        this.setState({page: page - 1})
      } else {
        this.setState({page: page + 1})
      } //this shouldnt be needed for in react!!!

      fetch(fPage)
      .then(response => response.json())
      .then(character => this.setState({ chars: character.results, info: character.info}));  
    }

    if (this.state.query !== '') { //gives error when useing name that does not occur in any characters
      fetch("https://rickandmortyapi.com/api/character/" + this.state.query)
      .then(response => response.json())
      .then(character => this.setState({ chars: character.results, info: character.info}));
      this.setState({query: ''})
    }
  }

  onFilterSubmit(fullQuery) {
    this.setState({query: fullQuery})
  }

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({testdata: new FormData(e.target)});
  // }


  render() {
    const {chars, page, info, quotes} = this.state;

    console.log(quotes[1])
    return (
      <fragment>

      <header>
        <div>
          <p>{quotes[1].quote}</p>
          <h5>- {quotes[1].name}</h5>
        </div>
      </header>
      <div>
        <Filter onSubmit={this.onFilterSubmit.bind(this)}/>
        <ChangePage 
          prevPage={() => this.setState({fPage: info.prev})} 
          nextPage={() => this.setState({fPage: info.next})}
          info={info}
        />
        <h2>page: {page}/{info.pages}</h2>

        <h2>{this.state.testdata}</h2>

        <ErrorBoundry>
          <CardList chars={chars}/>
        </ErrorBoundry> 
      </div>

      </fragment>
    );
  }

}

export default App;
