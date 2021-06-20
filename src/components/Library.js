import React, {useState, useEffect} from 'react';
import './Library.css';
import LibraryComponent from './LibraryComponent';

const Library = ({Favorites,toggle,setToggle}) => {

    const [Libraryy, setLibrary] = useState([]);
    const[watched,setWatched] = useState(()=>{
        let value
        try {
            value = JSON.parse(localStorage.getItem("watched"))
        } catch (e) {
            value = true
        }
        return value
    });

    const deleteHandler = (Title) =>{
        setLibrary( Libraryy.filter(el =>el.Title !== Title))
    }

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
                        const json = await response.json();
                        console.log('json',json);
                        setLibrary(Libraryy =>([...Libraryy,json]));
                        return (json)
                }
                fetchDataByTitle();

                //co ten map ma returnowac ??? bo jak nic nie returnuje to LibArr = undefined
                // return (); // ??? W sumie to i tak nie potrzebuje tego return bo nie uzywam tej wartosci potem
        
                return(movie);
            });
                console.log('state',Libraryy);
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

    /*
    const deleteHandler = (Title) =>{
        setLibrary( Libraryy.filter(el =>el.Title !== Title))
    }

    function changeVisible() {
        setVisible(!visible);
    }
    */

    //Mapujemy po Library i dla każdego jego elementu zwracamy podany div

   /*const LibraryComponent = Libraryy.map((movie1)=>{
        return(
            <div className = "Lib-indiv">
                <div className = "Lib-indiv-inner">
                    <div className = "Lib-div-eye" style = {visible?{visibility:'hidden'}:{visibility:'visible'}}> 
                        <i className="far fa-eye-slash"></i>
                    </div>
                    <div className = "karta" style = {visible?{backgroundColor:'black'}:{backgroundColor:'grey'}}>
                        <i onClick = {()=> changeVisible()} className="fas fa-eye"></i>
                        <button onClick = {()=>deleteHandler(movie1.Title)}><i className="fas fa-times"></i></button>
                        <img className = "img" alt='' src={ movie1.Poster }/>
                        <h1 className = "title">{ movie1.Title }</h1>
                        <h3 className = "h3-lib"><i className="fas fa-thumbs-up"></i>{movie1.imdbRating}</h3>
                        <h3 className = "h3-lib"><i className="fas fa-sort-amount-up-alt"></i>{movie1.imdbVotes}</h3>
                    </div>
                </div>
            </div>
        )
    })*/

    return(
            <div>
                <h1>Library contain your favorite series and movies</h1>
                <h2>Rate, delete or mark them as watched!</h2>
                {/* {LibraryComponent}  */}
                {Libraryy.map((movie)=>{
                    return(
                    <LibraryComponent deleteHandler = {deleteHandler} Watched = {movie.Watched} ID = {movie.imdbID} setWatched = {setWatched} watched = {watched} Title = {movie.Title} Poster = {movie.Poster} Rating = {movie.imdbRating} Votes = {movie.imdbVotes} setLibrary={setLibrary} Libraryy={Libraryy} />
                    );
                })}
            </div>
    )
}

export default Library;