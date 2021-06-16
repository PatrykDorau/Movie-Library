import React, {useState, useEffect} from 'react';
import './Library.css';


const Library = ({Favorites,toggle,setToggle}) => {

    const [Libraryy, setLibrary] = useState([]);

    useEffect(()=>{
        if(toggle){

            // Mamy wszystkie tytuły z Favorites w NewMovArr

            const NewMovArr = Favorites.map((movie)=>{    
                return(movie.Title)
            });
            

            //bierzemy tablice z tytułami i dla kazdego elementu tej tablicy używamy funkcji fetch która zwraca json. json przypisujemy do libraryy za pomoca setstate

                NewMovArr.map((movie)=> {
                    async function fetchDataByTitle() {
                        const response = await fetch(`http://www.omdbapi.com/?t=${movie}&plot=full&apikey=aaa47894`);
                        console.log('resp',response);
                        const json = await response.json();
                        console.log('json',json);
                        setLibrary(Libraryy =>([...Libraryy,json]));
                        return (json)
                }
                fetchDataByTitle();
                //co ten map ma returnowac ??? bo jak nic nie returnuje to LibArr = undefined
                // return (); // ???
                // return (movie.Poster, movie.Title, movie.imdbRating, movie.imdbVotes); //?
                return(movie);
            });
                console.log('state',Libraryy);
                setToggle(false);
        }
    },[toggle])
        
    //Mapujemy po Library i dla każdego jego elementu zwracamy podany div

    const LibraryComponent = Libraryy.map((movie1)=>{
        return(
            <div>
                <img alt='' src={ movie1.Poster }/>
                <h1>{ movie1.Title }</h1>
                <h3>{movie1.imdbRating}</h3>
                <h3>{movie1.imdbVotes}</h3>
             </div>
        )
    })

    return(
        <div className = "Lib-indiv">
            <h1>Library contain your favorite series and movies</h1>
            <h2>Rate, delete or mark them as watched!</h2>
            {LibraryComponent}
        </div>
    )
}

export default Library;