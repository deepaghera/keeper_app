import React,{ useState } from 'react';
import Note from '../Note/Note';
import InputNote from '../InputNote/InputNote';
const NoteList = () => {
   
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
            
            return [...prevL,note];
        });
      
       setNote({
            title:'',
            content: '',
            id:''
        });
    }

    function handleDelete(id) {
       // console.log(id);
        //const newvalue = noteList
       setNoteList((prevList) => {
           return prevList.filter( (note,index) => {
           
              return index !== id;
  
          } );
       })
       
    }

    return (
        <>
        <InputNote note={note} handleChange={handleChange} handleSubmit={handleSubmit} />
       {noteList.map((el, i) => {
           return(
              
                  <Note handleDelete={handleDelete} id={i} title={el.title} content={el.content} key={i} />
              
           );
       })}
       </>
    )
}



export default NoteList;