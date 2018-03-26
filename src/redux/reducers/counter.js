export default function counter(state = { result: 0 }, action) {
  switch (action.type) {
    case 'DECREMENT':
      console.log("==============> Reducers", action.type);
      return {
        ...state,
        result: state.result - 1
      };
    case 'INCREMENT':
      console.log("==============> Reducers", action.type);
      return {
        ...state,
        result: state.result + 1
      };
    default:
      return state;
  }
}