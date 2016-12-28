import { createStore, applyMiddleware, combineReducers } from 'redux';
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer } from './../reducers';
import thunk from 'redux-thunk'; //allow work with actions with functions

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
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(thunk)
);

return store;
};

