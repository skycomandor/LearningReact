import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

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

    }

    togglePersonHandler = () => {
       this.setState({
           showPersons: !this.state.showPersons
       })

    }


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

    }

  render() {
        const style = {
          backgroundColor: 'green',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer',
            color: 'white',
            ':hover' : {
              backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if (this.state.showPersons) {
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'blue',
                    color: 'yellow'
            }
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
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }



    return (
        <StyleRoot>

      <div className="App">

          <p className={classes.join(' ')}>Hi I am React!!!!</p>

          <button
              style={style}
              onClick={() => this.togglePersonHandler()}>Switch name</button>

          {persons}

          <h1>Hi i am react App {a}</h1>
         <p>heloo!!!!!!</p>


      </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
