import React,{ useState } from 'react';
import Note from '../Note/Note';
import notes from '../../notes';
import InputNote from '../InputNote/InputNote';
const NoteList = () => {
    const [ noteList , setNoteList ] = useState([]);
    const [ note , setNote ] = useState({
        title:'',
        content: ''
    });
    
    function handleChange(event){
        const value = event.target.value;
        const valueName = event.target.name;
        setNote((prev) => {
           return({
               ...prev,
               [valueName] : value

            })
        }); 
    }

    function handleSubmit(){
        setNoteList((prevL) => {
            return [...prevL,note];
        });
       setNote({
            title:'',
            content: ''
        });
    }

    return (
        <>
        <InputNote note={note} handleChange={handleChange} handleSubmit={handleSubmit} />
       {noteList.map((el) => {
           return(
              
                  <Note title={el.title} content={el.content} key={el.key} />
              
           );
       })}
       </>
    )
}



export default NoteList;