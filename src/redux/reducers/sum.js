export default function counter(state = { sum: 0 }, action) {
    switch (action.type) {
        case 'SUM':
            console.log("==============> Reducers", action.type);
            return {
                ...state,
                sum: Number(action.variableI) + Number(action.variableII)
            };
        default:
            return state;
    }
}