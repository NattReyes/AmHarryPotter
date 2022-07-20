import React, { useState } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from '../NavBar/modalAddCharacter';

export default function NavBar() {
    const [isOpenModal, setIsOpenModal]= useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <div className="options-container">
            <div className="options-div">
                <div className="options-btn">
                    <span>FAVORITOS</span>
                    <BookmarkIcon className="options-icon"/>
                </div>
                <div className="options-btn">
                <span>AGREGAR</span>
                    <PersonAddIcon className="options-icon" onClick={openModal}/>
                    <Modal 
                    isOpen={isOpenModal}
                    closeModal={closeModal}
                    />
                </div>
            </div>
        </div>
    )
}

/*
<buton onClick={openModal}> aqui

</buton> 
<PersonAddIcon className="options-icon"/>
                    <button onClick={openModal}>
                        <span>AGREGAR</span>
                    </button>
                    <Modal isOpen={isOpenModal}/>
*/
