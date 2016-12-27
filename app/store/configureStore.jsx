import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; //allow work with actions with functions
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer } from './../reducers';

export const configure = () => {
// Combine multiple reducer 
const reducer = combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});

// Add a third parameter to createStore for redux browser devTool
const store = createStore(reducer,
applyMiddleware(thunk), 
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__());

return store;
};

