import React from 'react';
import './SearchBox.css';


const SearchBox = ({ setSendReq ,searchChange }) => {


    return(
        <div className = "div-SearchBox">
            <input 
                className = "input-SearchBox"
                placeholder = "wyszukaj film"
                type = "search"
                onChange = {searchChange} />
            <button className="button-SearchBox" onClick = { () => {setSendReq(true)}}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

export default SearchBox;