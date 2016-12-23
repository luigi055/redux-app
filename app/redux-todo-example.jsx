import * as redux from 'redux';
import uuid from 'uuid';

console.log('Starting todo redux example');

const stateDefault = {
    showCompleted: false,
    searchText: '',
    todos: []
}

let reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

const currentState = store.getState();

console.log('Current state ', currentState);

const action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'something to find'
}

store.dispatch(action);

console.log('searchText should be "something to find"', store.getState());