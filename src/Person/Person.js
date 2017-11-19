import React from 'react';

const person = (props) => {
return (
    <div>
      <p onClick={props.click}>I am a {props.name} and {props.age} years!!</p>
      <p>{props.children}</p>
        <inpute type="text" onChange={}/>
    </div>
)
}

export default person;
