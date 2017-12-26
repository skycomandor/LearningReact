import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';


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
                    <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
                </div>

            );
            btnClass = classes.Red;

        }






    return (


      <div className={classes.App}>



          {persons}


      </div>

    );
  }
}

export default App;
