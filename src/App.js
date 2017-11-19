import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const a = 'hello';

class App extends Component {

    state = {
        persons: [
            { name: "Max", age: 28  },
            { name: "Manu", age: 30  }
        ]
    }

    swithNameHandler = () => {
        // console.log("was logged")
        this.setState({persons:  [
            { name: "Sasha", age: 28  },
            { name: "Manu", age: 30  }
        ]})

    }

    nameChangeHandler = (event) => {
        // console.log("was logged")
        this.setState({persons:  [
            { name: "Sasha", age: 28  },
            { name: event.target.value, age: 30  }
        ]})

    }

  render() {
    return (
      <div className="App">

          <button
              onClick={this.swithNameHandler}>Switch name</button>
          <Person
              click={this.swithNameHandler}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>
              My hobby racing</Person>


          <h1>Hi i am react App {a}</h1>
         <p>heloo!!!!!!</p>


      </div>
    );
  }
}

export default App;
