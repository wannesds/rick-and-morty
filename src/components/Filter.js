import React, { useEffect, useState } from 'react';


function Filter() {
    const [query, setQuery] = useState('');
    const [name , setName] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        setQuery(
                "?name=" + name +
                "&status=" + status +
                "&gender=" + gender
                );
    }, [name, gender, status])

    console.log(name + status + gender + query);

    return (
        <form>
            <input name="name" type='text' placeholder='search by name' onChange={e => setName(e.target.value)}/>
            <select name="status" onChange={e => setStatus(e.target.value)}>
                <option value="">-</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
            </select>
            <select name="gender" onChange={e => setGender(e.target.value)}>
                <option value="">-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button>Wubba Lubba Dub Dub</button>
        </form>

    );
}


export default Filter;

// class Filter extends Component { //get all species and locations from main api to put in form
//     constructor() {
        
//         super();
//         this.state = {
//             fullQuery: '',
//             name: '',
//             status: 'alive',
//             gender: 'male',
//         }  
//     }

//     handleChange = (event) => {
//         let nam = event.target.name;
//         let val = event.target.value;
//         this.setState({[nam]: val});
//     }

//     handleSubmit = (event) => {  
//         this.setState({fullQuery: 
//             "?name=" + this.state.name
//             + "&status=" + this.state.status
//             + "&gender=" + this.state.gender});
//         this.props.onChange(this.state.fullQuery);
//     }


// render() {
//     return (
//         <form>
//             <input name="name" type='text' placeholder='search by name' onChange={this.handleChange}/>
//             <select name="status" onChange={this.handleChange}>
//                 <option value="alive">Alive</option>
//                 <option value="dead">Dead</option>
//             </select>
//             <select name="gender" onChange={this.handleChange}>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//             </select>
//             {/* <button>Wubba Lubba Dub Dub</button> */}
//         </form>
//     );
//     }
// }
