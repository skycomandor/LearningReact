import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Person/Person';


const a = 'hello';

class App extends Component {

    state = {
        persons: [
            { id:'1',name: "Max", age: 28  },
            { id:'2',name: "Manu", age: 30  }
        ],
        showPersons: false
    };

    deletePersonHandler = (persenIndex) => {

        const persons = [... this.state.persons];
        persons.splice(persenIndex, 1)
        this.setState({persons: persons})

    };



    togglePersonHandler = () => {
       this.setState({
           showPersons: !this.state.showPersons
       })

    };


    nameChangeHandler = (event, id) => {
        // console.log("was logged")
        const personId = this.state.persons.findIndex(p => p.id === id)
        const person = {
            ...this.state.persons[personId]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personId] = person;
        this.setState({persons: persons})

    };

  render() {


        let btnClass = '';

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>

                    })}

                </div>

            );
            btnClass = classes.Red;

        }


        const classesProps = [];

        if (this.state.persons.length <= 2) {
            classesProps.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            classesProps.push(classes.bold)
        }



    return (


      <div className={classes.App}>

          <p className={classesProps.join(' ')}>Hi I am React!!!!</p>

          <button
              className={btnClass}
              onClick={() => this.togglePersonHandler()}>Switch name</button>

          {persons}

          <h1>Hi i am react App {a}</h1>
         <p>heloo!!!!!!????</p>


      </div>

    );
  }
}

export default App;
