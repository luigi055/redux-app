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

const store = redux.createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe changes
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

const currentState = store.getState();

console.log('Current state ', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'something to find'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'searching for a dog'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'the last thing to search'
});

console.log('searchText should be "something to find"', store.getState());