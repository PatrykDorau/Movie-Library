import React, { useState, useEffect } from 'react';
import './MovieList.css';

const MovieList = ({onAddToFavorites ,sendReq, setSendReq, Searchfield, setMoviesArray, MoviesArray}) =>{


    useEffect(()=> {
        if(sendReq){
            async function fetchData() {
                const response = await fetch(`http://www.omdbapi.com/?s=${Searchfield}&apikey=aaa47894`);
                const json = await response.json();
                console.log('json',json);
                setMoviesArray(json.Search);
                console.log('array',MoviesArray);
                setSendReq(false);
            }
            fetchData();
        }
    },[sendReq]);

     const MovieComponent = MoviesArray.map((movie)=>{
        return(
             <div className = "div-MovieList">
                <div className = "inner-div-MovieList">
                    <img alt='' src={movie.Poster}/>
                    <h1 className = "h1-MovieList">{movie.Title}</h1>
                    <button onClick ={onAddToFavorites} >
                        <i class="fas fa-plus"></i>
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