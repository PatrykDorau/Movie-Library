import SearchBox from './components/SearchBox';
import './App.css';
import Scroll from './components/Scroll';
import React, {useState} from 'react';
import MovieList from './components/MovieList';


function App() {

  const [Searchfield,setSearchfield] = useState('');
  const [MoviesArray, setMoviesArray] = useState([]);
  const [sendReq, setSendReq] = useState(false);


  const onSearchChange = (e) =>{
    console.log(e.target.value);
    setSearchfield(e.target.value)
  };

  return (
    <div className="App">
      <h1>Movie  Wiki</h1>
      <SearchBox  setSendReq ={ setSendReq } searchChange = {onSearchChange}/>
      <Scroll>
        <MovieList sendReq ={ sendReq} setSendReq ={ setSendReq } MoviesArray = {MoviesArray} setMoviesArray = {setMoviesArray} Searchfield={Searchfield}/>
      </Scroll>
    </div>
  );
}

export default App;
