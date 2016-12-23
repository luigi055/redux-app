import * as redux from 'redux';
import uuid from 'uuid';

console.log('Starting todo redux example');

const stateDefault = {
    showCompleted: false,
    searchText: '',
    todos: []
}

let reducer = (state = stateDefault, action) => {

  return state;
}

const store = redux.createStore(reducer);

const currentState = store.getState();

console.log(currentState);