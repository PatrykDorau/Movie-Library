import React, { useEffect } from 'react';
import './MovieList.css';

const MovieList = ({onAddToFavorites ,sendReq, setSendReq, Searchfield, setMoviesArray, MoviesArray, setToggle}) =>{



    useEffect(()=> {
        if(sendReq){
            async function fetchData() {
                const response = await fetch(`http://www.omdbapi.com/?apikey=aaa47894&s=${Searchfield}&plot=full`);
                const json = await response.json();
                // console.log('json',json);
                // console.log('response', response);
                setMoviesArray(json.Search);
                // console.log('array',MoviesArray);
                setSendReq(false);
            }
            fetchData();
        }
    },[sendReq]);

     const MovieComponent = MoviesArray.map((movie)=>{
        return(
             <div className = "div-MovieList">
                <div className = "inner-div-MovieList">
                    <img alt='' src={ movie.Poster }/>
                    <h1 className = "h1-MovieList">{ movie.Title }</h1>
                    <button onClick={ () => {onAddToFavorites(movie); setToggle(true);} } >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
             </div>
        )
     });

    return(
        <div>
             {MovieComponent}
        </div>
    );
}

export default MovieList;