import React, { useState } from 'react'


function Event()
{
    const[color,setColor] = useState('white');

    const changecolor = () =>
    {
        setColor(color === 'white'?'red':'white');
    };

    return (
        <div style = {{ backgroundColor: color,height:'100vh'}}>
        <button onClick={changecolor}>change color </button>
        </div>
    )
}

export default Event