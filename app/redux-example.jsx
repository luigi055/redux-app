import * as redux from 'redux';

console.log('Starting redux example');

// Name reducer and action generator
//----------------------------------
const nameReducer = (state = 'Anonymouss', action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return action.name;
      default:
        return state;
    }
};

const changeName = name => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

// Hobby reducer and action generator
//----------------------------------
let nextHobbyId = 1;
const hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  }
}

const addHobby = hobby => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

const removeHobby = id => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

// Movie reducer and action generator
//----------------------------------
let nextMovieId = 1;
const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
}

const addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
}

const removeMovie = id => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

// Combine multiple reducer 
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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

  console.log('new State ', store.getState());
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
store.dispatch(changeName('Luigi'));

store.dispatch(addMovie('The Exorcist', 'thriller'));

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Advengers',
  genre: 'Action, super heroes'
});

store.dispatch(addHobby('Play Guitar'));


store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Code'
});


store.dispatch(changeName('Emily'));

store.dispatch(removeHobby(2));

store.dispatch(removeMovie(1));