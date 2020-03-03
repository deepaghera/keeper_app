import React,{ useState } from 'react';
import Note from '../Note/Note';
import InputNote from '../InputNote/InputNote';
const NoteList = () => {
    const [ uid, setUid ] = useState(0);
    const [ noteList , setNoteList ] = useState([]);
    const [ note , setNote ] = useState({
        title:'',
        content: '',
        id : ''
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
            console.log([...prevL,note,note.id=uid])
            return [...prevL,note];
        });
        setUid(uid+1);
       setNote({
            title:'',
            content: '',
            id:''
        });
    }

    function handleDelete(id) {
        const newvalue = noteList.filter( (note) => {
            console.log("inside note",note.id , "and id=",id )
            return note.id !== id;

        } );
       setNoteList(newvalue);
        console.log(newvalue);
    }

    return (
        <>
        <InputNote note={note} handleChange={handleChange} handleSubmit={handleSubmit} />
       {noteList.map((el) => {
           return(
              
                  <Note handleDelete={handleDelete} id={el.id} title={el.title} content={el.content} key={el.id} />
              
           );
       })}
       </>
    )
}



export default NoteList;