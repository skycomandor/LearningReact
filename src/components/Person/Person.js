import React from 'react';
import pc from  './Person.css';

const person = (props) => {


return (
    <div className={pc.Person}>
      <p onClick={props.click}>I am a {props.name} and {props.age} years!!</p>
      <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)
}

export default person;
