import React from "react";

export function SearchBox({placeholder, onChange}) {
    return <input className='search' type={'search'} placeholder={placeholder}
                  onChange={onChange}/>

}