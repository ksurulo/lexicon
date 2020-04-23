import React, {useState} from 'react';
import './styles/App.css';
import './styles/searchBox.css';
import {Lexicon} from './components/Lexicon';
import {SearchBox} from './components/SearchBox';

function App() {
    const [filter, setFilter] = useState('');
    return (
        <div className="App">
            <h1>Monster Lexicon</h1>
            <SearchBox placeholder={'search monsters'} onChange={(e) => setFilter(e.target.value)}/>
            <Lexicon filter={filter}/>
        </div>
    );
}

export default App;
