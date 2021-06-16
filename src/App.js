import SearchBox from './components/SearchBox';
import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from './components/Library';



function App() {

  const [Searchfield, setSearchfield] = useState('');
  const [MoviesArray, setMoviesArray] = useState([]);
  const [Favorites, setFavorites] = useState([]);
  const [sendReq, setSendReq] = useState(false);
  const [toggle,setToggle] = useState(false);

  const onAddToFavorites = (film) =>{           // tutaj cos nie chodzi ta funkcja
    console.log(film);
    setFavorites([...Favorites, film])
    console.log(Favorites);
  }

  const onSearchChange = (e) =>{
    setSearchfield(e.target.value)
  };

  return (
    <Router>
      <Switch>
        <Route exact path ="/" >
          <div className="App">
            <h1>Movie-Wiki</h1>
            <div className = "div-main">
                <h3><Link className = "link-lib" to = "/library">Favourites<i className="fas fa-video"></i></Link></h3>
            </div>
            <SearchBox  setSendReq ={ setSendReq } searchChange = {onSearchChange}/>
            <MovieList setToggle = { setToggle} onAddToFavorites={onAddToFavorites} sendReq ={ sendReq} setSendReq ={ setSendReq } Searchfield={Searchfield} MoviesArray = {MoviesArray} setMoviesArray = {setMoviesArray}/>
          </div>
        </Route>
        <Route path = "/library">
          <Library setToggle = { setToggle} toggle={toggle} Favorites = { Favorites }/>
          <div className = "div-lib">
            <h3><Link className = "link-search" to = "/">Search<i className="fas fa-search"></i></Link></h3>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
