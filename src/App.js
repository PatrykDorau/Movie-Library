import SearchBox from './components/SearchBox';
import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';


function App() {

  const [Searchfield, setSearchfield] = useState('');
  const [MoviesArray, setMoviesArray] = useState([]);
  const [Favorites, setFavorites] = useState([]);
  const [sendReq, setSendReq] = useState(false);

  const onAddToFavorites = (film) =>{           // tutaj cos nie chodzi ta funkcja
    console.log(film);
    setFavorites([...Favorites, film])
    console.log(Favorites);
  }

  const onSearchChange = (e) =>{
    setSearchfield(e.target.value)
  };

  return (
    <div className="App">
      <h1>Movie-Wiki</h1>
      <SearchBox  setSendReq ={ setSendReq } searchChange = {onSearchChange}/>
      <MovieList onAddToFavorites={onAddToFavorites} sendReq ={ sendReq} setSendReq ={ setSendReq } Searchfield={Searchfield} MoviesArray = {MoviesArray} setMoviesArray = {setMoviesArray}/>
    </div>
  );
}

export default App;
