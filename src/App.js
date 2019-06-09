import React, { useState, useMemo } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import List from './components/PersonsList/List';
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

  const userNameHandler = (ref) => {
    setNewUserState({
      ...newUserState,
      name: ref
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
          {/* {pageState === 'users' ? */}
            {useMemo(
              () => (
            <List persons={personsState.persons} nameHandler={newNameHandler}/>), [personsState.persons]
            )}
          {/* : <Auth /> */}
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
