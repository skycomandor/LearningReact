
import React from 'react'

const cockpit = (props) => {

    const classesProps = [];

    if (props.persons.length <= 2) {
        classesProps.push(classes.red);
    }
    if (props.persons.length <= 1) {
        classesProps.push(classes.bold)
    }

    return (

        <div>

            <p className={classesProps.join(' ')}>Hi I am React!!!!</p>

          <button
          className={btnClass}
          onClick={() => this.togglePersonHandler()}>Switch name</button>



          <h1>Hi i am react App {a}</h1>
          <p>heloo!!!!!!????</p>
              </div>
    );
};


export default cockpit;