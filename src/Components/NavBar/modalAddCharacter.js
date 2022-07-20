import React from 'react';
import '../stylesHP/modal.scss';

 const Modal = ({ isOpen, closeModal }) => {
    return (
        <div className={`modal ${isOpen && 'modal-open'}`}>
            <h1>Hola</h1>
            <button onClick={closeModal}>
            close
            </button>
        </div>
    )
}

export default Modal