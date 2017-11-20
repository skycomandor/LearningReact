import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const a = 'hello';

class App extends Component {

    state = {
        persons: [
            { name: "Max", age: 28  },
            { name: "Manu", age: 30  }
        ],
        showPersons: false
    };

    deletePersonHandler = (persenIndex) => {

        const persons = this.state.persons;
        persons.splice(persenIndex, 1)
        this.setState({persons: persons})

    }

    togglePersonHandler = () => {
       this.setState({
           showPersons: !this.state.showPersons
       })

    }


    nameChangeHandler = (event) => {
        // console.log("was logged")
        this.setState({persons:  [
            { name: "Sasha", age: 28  },
            { name: event.target.value, age: 30  }
        ]})

    }

  render() {
        const style = {
          backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>

                    })}

                </div>

            );
        }

    return (
      <div className="App">

          <h1>Hi I am React!!!!</h1>

          <button
              style={style}
              onClick={() => this.togglePersonHandler()}>Switch name</button>

          {persons}

          <h1>Hi i am react App {a}</h1>
         <p>heloo!!!!!!</p>




      </div>
    );
  }
}

export default App;
