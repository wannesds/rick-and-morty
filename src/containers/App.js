import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
// import Card from '../components/Card';
import CardList from '../components/CardList';
import ChangePage from '../components/ChangePage';
// import ErrorBoundry from '../components/ErrorBoundry';
import Filter from '../components/Filter';

// import  {quotes } from '../quotes.js';


function App() {
  const [data, setData] = useState({results: [], info: []});
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const ar = url.split("=",2); //extracts page number

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        fetch(url)
          .then(response => response.json())
          .then(res => setData(res))
      } catch (error) {
        setIsError(true);
      } 
      setIsLoading(false);
    };

    fetchData();
  },[url])


  return (

    <Fragment>

      
      {/* {^ if on first page (no num found) , then gives '1' as default} */}

      

      <Filter getQuery={(e) => setUrl(`https://rickandmortyapi.com/api/character/${e}`)}/>

        {console.log("url test:" + url)}

        { isLoading ? 
          ( <div>Loading ...</div> ) : 
            ( 
              data.error || isError ? 
                ( <div>You fucked up Morty!</div> ) :
                  (
                    <Fragment>
                      <ChangePage 
                        prevPage={() => setUrl(data.info.prev)} 
                        nextPage={() => setUrl(data.info.next)}
                        info={data.info}
                      />
                      <p>{ar[1] !== Number ? '1' : ar[1]} / {data.info.pages}</p>
                      <CardList chars={data.results}/>
                    </Fragment>
                  )  
            )  
        }
        {/* this error check tree could be made into a component like errorboundry? or not?      */}
    </Fragment>
  )
}


// class App extends Component {
//   constructor() {
//     super ()
//     this.state = {
//       chars: [], 
//       info: [], 
//       fPage: '', // Future Page
//       page: 1,  // Current Page (by default 1)
//       query: '',
//       quotes: quotes
//     }
//   }

//   componentDidMount() {
//     fetch('https://rickandmortyapi.com/api/character/')
//       .then(response => response.json())
//       .then(character => this.setState({ chars: character.results, info: character.info}));

//     // fetch('../quotes.js')
//     //   .then(response => response.json())
//     //   .then(quotes => this.setState({ quotes: quotes}));
//     //  // default fetch
//   }

//   componentDidUpdate(prevProps, prevState) {//use useEffect!!!
//     const {fPage, page, info} = this.state;

//     if (prevState.fPage !== fPage) { //check for changes
//       if (fPage === info.prev) { //changes current page before new fetch
//         this.setState({page: page - 1})
//       } else {
//         this.setState({page: page + 1})
//       }

//       fetch(fPage)
//       .then(response => response.json())
//       .then(character => this.setState({ chars: character.results, info: character.info}));  
//     }

//     if (this.state.query !== '') { //gives error when useing name that does not occur in any characters, catcherror
//       fetch("https://rickandmortyapi.com/api/character/" + this.state.query)
//       .then(response => response.json())
//       .then(character => this.setState({ chars: character.results, info: character.info}));
//       this.setState({query: ''})
//     }
//   }

//   // onFilterSubmit(fullQuery) {
    
//   // }

//   // onSubmit = (e) => {
//   //   e.preventDefault()
//   //   this.setState({testdata: new FormData(e.target)});
//   // }


//   render() {
//     const {chars, page, info, quotes, fullQuery} = this.state;

//     console.log(quotes[1])
//     return (
//       <fragment>

//       <header>
//         <div>
//           <p>{quotes[1].quote}</p>
//           <h5>- {quotes[1].name}</h5>
//         </div>
//       </header>
//       <div>
//         <Filter onSubmit={() => this.setState({query: fullQuery})}/>
//         <ChangePage 
//           prevPage={() => this.setState({fPage: info.prev})} 
//           nextPage={() => this.setState({fPage: info.next})}
//           info={info}
//         />
//         <h2>page: {page}/{info.pages}</h2>

//         <h2>{this.state.testdata}</h2>

//         <ErrorBoundry>
//         <Suspense fallback={<div>Oops Something went wrong!</div>}>
//           <CardList chars={chars}/>
//         </Suspense>
//         </ErrorBoundry> 
//       </div>

//       </fragment>
//     );
//   }

// }

export default App;
