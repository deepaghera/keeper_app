import React from 'react';
import "./Note.css";
const Note = ({title, content}) => {
    
    return (
        <div className="notebox">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;