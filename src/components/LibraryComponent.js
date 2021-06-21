import React, {useEffect, useState} from "react";
import './Library.css';

const LibraryComponent = ({deleteHandler,Title, Watched, Poster, Rating,Libraryy, setLibrary, Votes, ID}) => {

    const stars = [1,2,3,4,5,6,7,8,9,10]
    const [ratingg, setRatingg] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(()=>{
        const data = localStorage.getItem('rat'+ID);
        if(data){
            setRatingg(JSON.parse(data));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('rat'+ID, JSON.stringify(ratingg));
    });

    const Star = (props) =>{
        const{ fill = "none"} = props;
        return(
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={fill} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        )
    }

    const RatingIcon = (props) => {
        const {index, ID, ratingg, hoverRating, onMouseEnter, onMouseLeave, onSaveRatingg, SelectHandler} = props;
        const fill = React.useMemo(()=>{
            if(hoverRating >= index){
                return 'yellow';
            }else if(ratingg>=index){
                return 'yellow';
            }
            return 'none';
        },[ratingg,hoverRating, index]);
        return(
            <div className = "star-box" onMouseEnter= {()=>onMouseEnter(index)} onMouseLeave = {()=>onMouseLeave()} onClick = {()=> {onSaveRatingg(index); SelectHandler(ID)}}>
                <Star fill = {fill}/>
            </div>
        )
    }

    const onMouseEnter = (index) =>{
        setHoverRating(index);
    };
    const onMouseLeave = () => {
        setHoverRating(0);
    };
    const onSaveRatingg = (index) =>{
        setRatingg(index);
    };

    const watchedHandler = (ID) => {
        setLibrary(Libraryy.map((item)=>{
            if(item.imdbID === ID){
                return {
                    ...item, Watched: !item.Watched
                }
            }
            return(item);
        }))
    }

    const SelectHandler = (ID) => {
        setLibrary(Libraryy.map((item)=>{
            if(item.imdbID === ID){
                return {
                    ...item, Selected: ratingg
                }
            }
            return(item);
        }
        ))
    }
   
    return(
        <div className = "Lib-indiv">
                <div className = "Lib-indiv-inner">
                    <div className = "Lib-div-eye" style = {Watched?{visibility:'visible'}:{visibility:'hidden'}}> 
                         <i className="far fa-check-circle"></i>
                    </div>
                    <div className = "karta" style = {Watched?{backgroundColor:'grey'}:{backgroundColor:'#FFA9A3'}}>
                        <i onClick = {() => watchedHandler(ID)} className="fas fa-eye"></i>
                        <i onClick = {() => deleteHandler(Title)} className="fas fa-times"></i>
                        <img className = "img" alt='' src={ Poster }/>
                        <h1 className = "title">{ Title }</h1>
                        <div className = "star-box-out">
                            {stars.map((index)=>{
                                return(
                                
                                    <RatingIcon ID={ID} SelectHandler = {SelectHandler} index = {index} ratingg = {ratingg} hoverRating = {hoverRating} onMouseEnter ={onMouseEnter} onMouseLeave = {onMouseLeave} onSaveRatingg = {onSaveRatingg}/>
                                
                                )
                                })}
                        </div>
                        <h3 className = "h3-lib"><i className="fas fa-thumbs-up"></i>{Rating}</h3>
                        <h3 className = "h3-lib"><i className="fas fa-sort-amount-up-alt"></i>{Votes}</h3>
                    </div>
                </div>
            </div>
    )
}

export default LibraryComponent;