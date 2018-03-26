// import { fromJS } from 'immutable';

// The initial state of the App
const initialState = {
  waiting: '',
  error: false,
  userData: ''
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        waiting: 'processing....'
      };
    case 'searchSuccess':
      return{
        ...state,
        userData: action.data,
        waiting:''
      }; 
    case 'searchError':
      return {
        ...state,
        error: action.err,
        waiting:''
      }; 
    default:
      return state;
  }
}

export default appReducer;
