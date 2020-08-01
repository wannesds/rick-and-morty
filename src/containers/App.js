import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import ChangePage from '../components/ChangePage';
import ErrorBoundry from '../components/ErrorBoundry';
import Filter from '../components/Filter';


class App extends Component {
  constructor() {
    super ()
    this.state = {
      chars: [], 
      info: [], 
      fPage: '', // Future Page
      page: 1,  // Current Page (by default 1)
      query: ''
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(character => this.setState({ chars: character.results, info: character.info}));
     // default fetch
  }

  componentDidUpdate(prevProps, prevState) {
    const {fPage, page, info} = this.state;

    if (prevState.fPage !== fPage) { //check for changes
      if (fPage === info.prev) { //changes current page before new fetch
        this.setState({page: page - 1})
      } else {
        this.setState({page: page + 1})
      } 

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
    const {chars, page, info} = this.state;
    return (
      
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

      
    );
  }

}

export default App;
