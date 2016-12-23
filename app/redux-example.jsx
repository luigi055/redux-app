import * as redux from 'redux';

console.log('Starting redux example');

// A reducer is a pure fuction that passes the state and action to a store
// this reducer setisfies two conditions
// 1). this reducer has a default state which the application will get started
// 2) our reducer function returns a state even if there's no actions or if the action is not recognize 
let reducer = (state = {name: 'Anonymous'}, action) => {
  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
  return state;
}
// Add a second parameter to createStore for redux browser devTool
const store = redux.createStore(reducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
// The only argument is a function that display changes in the states
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

// This getState method returns our object. in this case the default state is name: anonymous
let currentState = store.getState();
console.log('Current State: ', currentState);

// All actions are objects
// const action = {
//   type: 'CHANGE_NAME',
//   name: 'luigi'
// }
// dispatch method just required one property which is an action
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'luigi'
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});