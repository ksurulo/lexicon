import React, {useEffect, useState} from "react";
import '../styles/lexicon.styles.css'
import LexiconEntry from './LexiconEntry'

function Lexicon() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users))
    });

    const [monsters, setMonsters] = useState([]);
    return <div className='lexicon'>
        {
            monsters.map(monster => <LexiconEntry monster={monster}/>)
        }
    </div>
}

export default Lexicon