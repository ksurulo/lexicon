import React, {setState, useState} from 'react';
import './App.css';
import {Lexicon} from './components/Lexicon';

function App() {

    const [filter, setFilter] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <input type={'search'} placeholder={'search monsters'} onChange={e => setFilter(e.target.value)}/>
                <Lexicon filter={filter}/>
            </header>
        </div>
    );
}

export default App;
