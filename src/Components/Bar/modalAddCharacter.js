import React from 'react';
import '../stylesHP/modal.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';;

 const Modal = ({ isOpen, closeModal }) => {
    return (
        <div className={`modal ${isOpen && 'modal-open'}`}>               
                <form className='formAdd'>
                <HighlightOffIcon  onClick={closeModal} className='formAdd-close'/>
                <fieldset className='formAdd-display'>
          <legend className='formAdd-title'>Agrega un personaje</legend>
          <label className='formAdd-label'>
            NOMBRE
            <input type='text'className='formAdd-input' required/>
          </label>
          <label className='formAdd-label'>
            CUMPLEAÑOS
            <input type='date'className='formAdd-input' required/>
          </label>
          <label className='formAdd-label'>
            COLOR OJOS
            <input type='text'className='formAdd-input' required/>
          </label>
          <label className='formAdd-label'>
            COLOR PELO
            <input type='text' className='formAdd-input' required/>
          </label>
          <legend className='formAdd-legend'>
            GÉNERO
            <div className='formAdd-radios'>
              <label className='formAdd-radio'>
                <input value='female' type='radio' name='gender' required
                />
                <span>Mujer</span>
              </label>
              <label className='formAdd-radio'>
                <input value='male' type='radio' name='gender' required />
                <span>Hombre</span>
              </label>
            </div>
          </legend>
          <legend className='formAdd-legend'>
            POSICIÓN
            <div className='formAdd-radios'>
              <label className='formAdd-radio'>
                <input type='radio' name='position' required />
                <span>Estudiante</span>
              </label>
              <label className='formAdd-radio'>
                <input type='radio' name='position' required />
                <span>Staff</span>
              </label>
            </div>
          </legend>
          <legend className='formAdd-selectHouse'>
            CASA
            <div className='formAdd-radios'>
              <div className='formAdd-houses'>
                <label className='formAdd-radio'>
                  <input value='Gryffindor' type='radio' name='house' required/>
                  <span>Gryffindor</span>
                </label>
                <label className='formAdd-radio'>
                  <input value='Slytherin' type='radio'  name='house' required/>
                  <span>Slytherin</span>
                </label>
                <label className='formAdd-radio'>
                  <input value='Ravenclaw' type='radio' name='house' required/>
                  <span>Ravenclaw</span>
                </label>
                <label className='formAdd-radio'>
                  <input value='Hufflepuff' type='radio' name='house' required/>
                  <span>Hufflepuff</span>
                </label>
              </div>
            </div>
          </legend>
          <label className='formAdd-addFile'>
            FOTOGRAFÍA
            <div className='formAdd-file'>
              <input className='formAdd-inputFile' type='file' accept='image/jpg, image/png' required/>
            </div>
          </label>
          <button type='submit' className='buttonSubmit'>GUARDAR</button>        
        </fieldset>
      </form>
        </div>
    )
}

export default Modal