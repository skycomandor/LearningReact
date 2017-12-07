import React from 'react';
import personClass from './Person.css';

const person = (props) => {



return (
    <div className={personClass.Person} >
      <p onClick={props.click}>I am a {props.name} and {props.age} years!!</p>
      <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)
}

export default person;
