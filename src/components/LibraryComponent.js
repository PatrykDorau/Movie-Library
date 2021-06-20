import React, {useEffect} from "react";
import './Library.css';

const LibraryComponent = ({deleteHandler,Title, Watched, Poster, Rating, setWatched,watched,Libraryy, setLibrary, Votes, ID}) => {
    console.log(ID);

    function changeVisible() {
        setWatched(!watched);
    }

    useEffect (()=>{
        localStorage.setItem("watched", watched);
    },[watched])

    //test
    const watchedHandler = (ID) => {
        console.log(ID);
        setLibrary(Libraryy.map((item)=>{
            if(item.imdbID === ID){
                console.log(ID);
                return {
                    ...item, Watched: !item.Watched
                }
            }
            return(item);
        }))
    }

    const SelectHandler = (ID) => {
        console.log(ID);
        setLibrary(Libraryy.map((item)=>{
            if(item.imdbID === ID){
                console.log(ID);
                return {
                    ...item, Selected: item.Selected
                }
            }
            return(item);
        }))
    }
    // useEffect(()=>{
    //     const data2 = localStorage.getItem('watched');
    //         setWatched(JSON.parse(data2));
    // },[]);

    // useEffect(()=>{
    //     localStorage.setItem('watched', JSON.stringify(watched));
    // });
    
    return(
        <div className = "Lib-indiv">
                <div className = "Lib-indiv-inner">
                    <div className = "Lib-div-eye" style = {Watched?{visibility:'visible'}:{visibility:'hidden'}}> 
                        <i className="far fa-eye-slash"></i>
                    </div>
                    <div className = "karta" style = {Watched?{backgroundColor:'grey'}:{backgroundColor:'black'}}>
                        <i onClick = {() => watchedHandler(ID)} className="fas fa-eye"></i>
                        <i onClick = {() => deleteHandler(Title)} className="fas fa-times"></i>
                        <img className = "img" alt='' src={ Poster }/>
                        <h1 className = "title">{ Title }</h1>
                        <h3 className = "h3-lib">Rate:</h3>
                        <select onChange = {()=>SelectHandler(ID)}>
                            <option value = "none" selected disable hidden>Rate your movie!</option>
                            <option>1</option>
                            <option>2<i class="fas fa-star"></i></option>
                            <option>3<i class="fas fa-star"></i></option>
                            <option value = "starter">4<i class="fas fa-star"></i></option>
                            <option>5<i class="fas fa-star"></i></option>
                            <option>6<i class="fas fa-star"></i></option>
                            <option>7<i class="fas fa-star"></i></option>
                            <option>8<i class="fas fa-star"></i></option>
                            <option>9<i class="fas fa-star"></i></option>
                            <option>10<i class="fas fa-star"></i></option>
                        </select>
                        <h3 className = "h3-lib"><i className="fas fa-thumbs-up"></i>{Rating}</h3>
                        <h3 className = "h3-lib"><i className="fas fa-sort-amount-up-alt"></i>{Votes}</h3>
                    </div>
                </div>
            </div>
    )
}

export default LibraryComponent;