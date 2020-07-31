import React, { Component } from 'react';

class Filter extends Component { //get all species and locations from main api to put in form
    constructor() {
        
        super();
        this.state = {
            name: '',
            status: '',
            gender: '',
            locations: '',
            numArray: []
        }  
    }

    componentDidMount() {
        const array = [];
        for (let i = 1; array.length < 94; i) {
            array.concat({i});
        }
        this.setState({numArray: array});

        fetch('https://rickandmortyapi.com/api/location' + this.state.numArray)
          .then(response => response.json())
          .then(locations => this.setState({ locations: locations.results}));
      }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name, this.state.status)
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

render() {
    console.log(this.numArray);
    return (
        <form onSubmit={this.handleSubmit}>
            <input name="name" type='text' placeholder='search by name' onChange={this.handleChange}/>
            <select name="status" onChange={this.handleChange}>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
            </select>
            <select name="gender" onChange={this.handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <select name="location" onChange={this.handleChange}>
            </select>
            <button>Wubba Lubba Dub Dub</button>
        </form>
    );
    }
}

export default Filter;