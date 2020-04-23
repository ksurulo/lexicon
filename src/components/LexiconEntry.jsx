import React, {useEffect, useState} from "react";
import '../styles/lexiconEntry.styles.css'

function LexiconEntry(props) {
    return <div className='lexiconEntry'>
        <img alt={"monster"} src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
}

export default LexiconEntry