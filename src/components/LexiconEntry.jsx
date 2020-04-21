import React, {useEffect, useState} from "react";
import '../styles/lexicon.styles.css'

function LexiconEntry(props) {
    return <h1>{props.monster.name}</h1>
}
export default LexiconEntry