import React, { Component } from 'react';

class Filter extends Component { //get all species and locations from main api to put in form
    constructor() {
        
        super();
        this.state = {
            fullQuery: '',
            name: '',
            status: 'alive',
            gender: 'male',
        }  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({fullQuery: 
            "?name=" + this.state.name
            + "&status=" + this.state.status
            + "&gender=" + this.state.gender});
        this.props.onSubmit(this.state.fullQuery);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

render() {
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
            <button>Wubba Lubba Dub Dub</button>
        </form>
    );
    }
}

export default Filter;