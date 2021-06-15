import React, {useEffect} from 'react';

const MovieList = ({sendReq, setSendReq, Searchfield, setMoviesArray, MoviesArray}) =>{

    useEffect(()=> {
        if(sendReq){
            fetch(`http://www.omdbapi.com/?s=${Searchfield}&apikey=aaa47894`)
                .then(response => response.json())
                .then(console.log)
                // .then(response => response.blob())
                // .then(function(myblob) {
                //     setMoviesArray([myblob])
                // })
                // .then(movie => setMoviesArray([movie]))
                .then((data)=>{
                    setMoviesArray(data)
                })
                .then(console.log(MoviesArray))
                setSendReq(false);
        }
    },[sendReq]);


    //wziac response i włozyc do MoviesArray
    const Arr = () => {

    }

     /*const MovieComponent = MoviesArray.map((movie, i)=>{
         return(
             <div>
                <img alt='' src={MoviesArray[i].Search.Poster}/>
                <h1>{MoviesArray[i].Title}</h1>
             </div>
        )
     });*/

    return(
        // <MovieComponent/>
        <h1>tutaj ma byc lista filmow</h1>
    );
}
export default MovieList