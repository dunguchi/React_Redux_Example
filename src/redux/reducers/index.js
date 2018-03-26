import counter from './counter'
import sum from './sum'
import appReducer from './search'

// export default function combineReducer(currentState , action) {
//   var nextState = { ...currentState };
//   return {
//     counter: counter(nextState.counter, action),
//     sum: sum(nextState.sum, action),
//   }
// }

import { combineReducers } from 'redux'

export default combineReducers({
  count:counter,
  sum,
  searchAbout: appReducer
});