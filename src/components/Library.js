import React, {useState, useEffect} from 'react';
import './Library.css';
import LibraryComponent from './LibraryComponent';
import Scroll from './Scroll';

const Library = ({Favorites,toggle,setToggle,}) => {

    const [Libraryy, setLibrary] = useState([]);
    const [NewArr, setNewArr] = useState(()=>{
        let value
        try{
            value = [JSON.parse(localStorage.getItem('NewArr'))]
        }catch (e) {
            value = []
        }
        return value;
    });

    const deleteHandler = (Title) =>{
        setLibrary( Libraryy.filter(el =>el.Title !== Title))
    }


    useEffect(()=>{
        localStorage.setItem('NewArr', JSON.stringify(NewArr));
    });


    useEffect(()=>{
         if(toggle){
            
            const NewMovArr = Favorites.map((movie)=>{    
                return(movie.Title)
            });
            setNewArr(NewMovArr);

            const set = [...new Set(NewMovArr).values()]

                Promise.all(set.map(async(movie)=> {
                        const response = await fetch(`http://www.omdbapi.com/?t=${movie}&plot=full&apikey=aaa47894`);
                        const json = await response.json();
                        return (json)
                })).then((param)=>{setLibrary(...Libraryy,param)});
            
            setToggle(false);
        }
    },[toggle])
    
    useEffect(()=>{
        const data = localStorage.getItem('lib');
        if(data){
            setLibrary(JSON.parse(data));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('lib', JSON.stringify(Libraryy));
    });

    return(
            <div>
                <h1>Library contain your favorite series and movies</h1>
                <h2>Rate, delete or mark them as watched!</h2>
                {/* {LibraryComponent}  */}
                <Scroll>
                {Libraryy.map((movie)=>{
                    return(
                    <LibraryComponent deleteHandler = {deleteHandler} Watched = {movie.Watched} ID = {movie.imdbID} Title = {movie.Title} Poster = {movie.Poster} Rating = {movie.imdbRating} Votes = {movie.imdbVotes} setLibrary={setLibrary} Libraryy={Libraryy} />
                    );
                })}
                </Scroll>
            </div>
    )
}

export default Library;