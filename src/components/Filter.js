
import React, {useState} from 'react';
import './Filter.css';

function Filter({getQuery}) {    
    const [name , setName] = useState('')
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
  
    const makeQuery = e => {
        e.preventDefault()  
        var query = "?name=" + name +
                    "&status=" + status +
                    "&gender=" + gender 
        ;
        getQuery(query) //query data gets send back to parent
    }
    return (
        <form>
            <input className="bw1 ma1 pa1 ba b--green" name="name" type='text' onChange={e => setName(e.target.value)} placeholder='search by name'/>
            <select className="bw1 ma1 pa1" name="status" onChange={e => setStatus(e.target.value)}>
                <option value="">-</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
            </select>
            <select className="bw1 ma1 pa1" name="gender" onChange={e => setGender(e.target.value)}>
                <option value="">-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button className="bw1 ma1 pa1" onClick={makeQuery}>Wubba Lubba Dub Dub</button>
        </form>

    );
}
  // const nameRef = useRef()
    // const statusRef = useRef()
    // const genderRef = useRef()
    // const queryRef = useRef()

    // useEffect(() => {
    //     setQuery(
    //             "?name=" + name +
    //             "&status=" + status +
    //             "&gender=" + gender
    //             );
    // }, [name, gender, status])

// class Filter extends Component { //get all species and locations from main api to put in form
//     constructor() {
        
//         super();
//         this.state = {
//             query: '',
//             name: '',
//             status: '',
//             gender: ''
//         }  
//         this.handleChange = this.handleChange.bind(this);
//         this.submitChange = this.submitChange.bind(this);
//     }
//     handleChange = (event) => {
//         let nam = event.target.name;
//         let val = event.target.value;
//         this.setState({[nam]: val});
       
//         console.log(1 + this.state.status + this.state.gender + event.target.value + event.target.name);
//         this.submitChange();
       
//     }
//     submitChange() {
//         this.setState({query: 
//             "name=" + this.state.name
//             + "&status=" + this.state.status
//             + "&gender=" + this.state.gender});
//         this.props.onUpdate(this.state.query);

//         console.log(this.state.status + this.state.gender);
//     }


    

// render() {console.log("q test:" + this.state.query);
//     return (
        
//         <form>
//             <input name="name" type='text' placeholder='search by name' onChange={this.handleChange}/>
//             <select name="status" onChange={(e) => this.handleChange(e)}>
//                 <option value="">-</option>
//                 <option value="alive">Alive</option>
//                 <option value="dead">Dead</option>
//             </select>
//             <select name="gender" onChange={this.handleChange}>
//                 <option value="">-</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//             </select>
//             <button onClick={this.submitChange}>Wubba Lubba Dub Dub</button>
//         </form>
//     );
//     }
// }

export default Filter;
