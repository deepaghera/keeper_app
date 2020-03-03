import React from 'react';
import './InputNote.css';



const InputNote = ( { handleChange , note , handleSubmit }) => {

    return (
       <div className="cont">
            <div className="input-container">
                <input value={note.title} name="title" onChange={handleChange} type="text" placeholder="Title"/> 
                <br/>
                <input value={note.content} name="content" onChange={handleChange} type="text" placeholder="Take a note..." />
                <button onClick={handleSubmit} className="add-btn">Add</button>
            </div>
       </div>
       
    );

}

export default InputNote;