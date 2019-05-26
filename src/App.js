import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        id: 1,
        name: 'Irene',
        age: 32
      },
      {
        id: 2,
        name: 'Marco',
        age: 27
      }
    ]
  });

  const defaultUser = {
    name: undefined,
    age: undefined
  }

  const [newUserState, setNewUserState] = useState(defaultUser);

  const newNameHandler = (event, id) => {
    const updatedList = personsState.persons.map(p => p.id === id ? { ...p, name: event.target.value } : p);
    setPersonsState({
      ...personsState,
      persons: updatedList
    })
  }

  const userAgeHandler = (event) => {
    setNewUserState({
      ...newUserState,
      age: event.target.value
    })
  }

  const userNameHandler = (event) => {
    setNewUserState({
      ...newUserState,
      name: event.target.value
    })
  }

  const addUser = () => {
    const updatedList = personsState.persons.concat({
      ...newUserState,
      id: personsState.persons.length + 1
    });
    setPersonsState({
      ...personsState,
      persons: updatedList
    })
    setNewUserState(defaultUser)
  }

  // Multiple, separated State slices
  console.log('personsState', personsState);
  console.log('newUserState', newUserState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is working!</h1>
      </header>
      <div className="App-intro">
        {personsState.persons.map(person =>
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            // the arrow function can be inefficient re-rendering too often
            change={(e) => newNameHandler(e, person.id)}
          >
            and I love yoga
          </Person>
        )}
        <UserInput
          nameHandler={userNameHandler}
          name={newUserState.name}
          ageHandler={userAgeHandler}
          age={newUserState.age}
        />
        <UserOutput
          click={addUser}
          name={newUserState.name}
          age={newUserState.age}
        />
      </div>
    </div>
  );
}

export default App;
