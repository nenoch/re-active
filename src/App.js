import React, { useState } from 'react';
import Person from './components/Person/Person';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import TextField from './components/TextField/TextField';
import { AuthContext } from './context';

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
  const [pageState, setPageState] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

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

  const switchComponent = (compName) => {
    setPageState(compName);
  }

  const login = () => {
    setAuthStatus(true);
  }

  // Multiple, separated State slices
  console.log('personsState', personsState);
  console.log('newUserState', newUserState);
  console.log('pageState', pageState);

  const usersList = () => {
    return personsState.persons.map(person =>
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        // the arrow function can be inefficient re-rendering too often
        change={(e) => newNameHandler(e, person.id)}
      >
        and I love yoga
    </Person>
    )
  }

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          status: authStatus,
          login: login
        }}>
        <Header
          onLoadUsers={() => switchComponent('users')}
          onLoadAuth={() => switchComponent('auth')}
        />
        <div className="App-intro">
          {pageState === 'users' ?
            usersList() : <Auth />
          }
          <TextField />
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
