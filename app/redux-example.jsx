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
const store = redux.createStore(reducer);

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

console.log('Name should be luigi: ',store.getState());