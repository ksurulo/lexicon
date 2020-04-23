import React, {useEffect, useState} from "react";
import '../styles/lexicon.styles.css'
import LexiconEntry from './LexiconEntry'

export function Lexicon({filter}) {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(monsters => setMonsters(monsters))
    });


    const [monsters, setMonsters] = useState([]);
    const filteredMonsters = filterMonsters(monsters, filter);
    return <div className='lexicon'>
        {
            filteredMonsters.map(monster => <LexiconEntry monster={monster}/>)
        }
    </div>
}

function filterMonsters(monsters, filter) {
    return monsters.filter(monster => monster.name.toLowerCase().includes(filter))

}