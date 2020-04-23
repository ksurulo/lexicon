import React from "react";
import '../styles/lexiconEntry.css'

function LexiconEntry({monster}) {
    return <div className='lexiconEntry'>
        <img alt={"monster"} src={`https://robohash.org/${monster.id}?set=set2`}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
}

export default LexiconEntry