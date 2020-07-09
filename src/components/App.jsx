import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(element => <Note key={element.id} title={element.title} content={element.content}/>)}
            <Footer />
        </div>
    )
}

export default App;