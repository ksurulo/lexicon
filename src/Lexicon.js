import React, {useEffect, useState} from "react";

function Lexicon() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users))
    });

    const [monsters, setMonsters] = useState([
        {
            name: 'Frankenstein',
            id: 1
        },
        {
            name: 'Dracula',
            id: 2
        },
        {
            name: 'Wolverine',
            id: 3
        }
    ]);
    return <div>
        {
            monsters.map(monster => <h1>{monster.name}</h1>)
        }
    </div>
}

export default Lexicon