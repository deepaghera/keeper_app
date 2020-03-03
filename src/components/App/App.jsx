import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NoteList from '../NoteList/NoteList';


const App = () => {
    return (
      <div>
        <Header />
       <NoteList />
       
        <Footer />
      </div>
     
    );
}

export default App;