import React from 'react';
import "./Note.css";
const Note = ({title, content ,id , handleDelete}) => {
    
    return (
        <div className="notebox">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => handleDelete(id)} className="del-btn">Delete</button>
        </div>
    );
}

export default Note;