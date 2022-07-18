import React from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function NavBar(){

    return(
        <div className="options-container">
            <div className="options-div">
                <div className="options-btn">
                    <span>FAVORITOS</span>
                    <BookmarkIcon className="options-icon"/>
                </div>
                <div className="options-btn">
                    <span>AGREGAR</span>
                    <PersonAddIcon className="options-icon"/>
                </div>
            </div>
        </div>
    )
}