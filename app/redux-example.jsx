import * as redux from 'redux';
import * as action from './actions';
import * as store from './store/configureStore';


console.log('Starting redux example');

console.log(store.configure());

// Subscribe to changes
// The only argument is a function that display changes in the states
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('new State ', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML =  
      `<a target="_blank" href="${state.map.url}">View your Location</a>`;
  }
  
});
// unsubscribe();

store.dispatch(action.fetchLocation());

// This getState method returns our object. in this case the default state is name: anonymous
let currentState = store.getState();
console.log('Current State: ', currentState);

store.dispatch(action.changeName('Luigi'));

store.dispatch(action.addMovie('The Exorcist', 'thriller'));

store.dispatch(action.addMovie('Advengers', 'Action'));

store.dispatch(action.addHobby('Play Guitar'));

store.dispatch(action.addHobby('Code'));

store.dispatch(action.changeName('Emily'));

store.dispatch(action.removeHobby(2));

store.dispatch(action.removeMovie(1));