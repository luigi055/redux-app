import * as redux from 'redux';

console.log('Starting redux example');

// A reducer is a pure fuction that passes the state and action to a store
// this reducer setisfies two conditions
// 1). this reducer has a default state which the application will get started
// 2) our reducer function returns a state even if there's no actions or if the action is not recognize 
const defaultState = {
  name: 'Anonymous',
  hobbies:[],
  movies: []
}
let nextHobbyId = 1;
let nextMovieId = 1;
let oldReducer = (state = defaultState, action) => {
  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
         hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        //filter if something returns false will not show the item
        hobbies: state.hobbies.filter( hobby => hobby.id !== action.id)
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter( movie => movie.id !== action.id)
      }
    default:
      return state;
  }
  return state;
}

const nameReducer = (state = 'Anonymouss', action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return action.name;
      default:
        return state;
    }
};

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
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'luigi'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'The Exsorcist',
  genre: 'Thriller'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Advengers',
  genre: 'Action, super heroes'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Play guitar'
});


store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Code'
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});