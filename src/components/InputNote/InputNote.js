import React from 'react';
import './InputNote.css';



const InputNote = ( { handleChange }) => {

    return (
       <div className="cont">
            <div className="input-container">
                <input name="title" onChange={handleChange} type="text" placeholder="Title"/> 
                <br/>
                <input name="content" onChange={handleChange} type="text" placeholder="Take a note..." />
                <button className="add-btn">Add</button>
            </div>
       </div>
       
    );

}

export default InputNote;