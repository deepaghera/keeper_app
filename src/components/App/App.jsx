import React from 'react';
import Header from '../Header/Header';
import Note from '../Note/Note';
import Footer from '../Footer/Footer';
import notes from '../../notes';



const App = () => {
    return (
      <div>
        <Header />
       {
         notes.map((el) => {
          return(
            <Note key={el.key} title={el.title} content={el.content} />
          )
         })
       }
       
        <Footer />
      </div>
     
    );
}

export default App;