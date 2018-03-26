export const decrement = () => ({ type: 'DECREMENT' });
export const increment = () => ({ type: 'INCREMENT' });
export const sum = (a, b) => ({ type: 'SUM', variableI: a, variableII: b });
export function search(input){
    console.log('====> begin search');
    return {
        type: 'search',
        inputString: input
    };
};

// export function testCallApi(input){
//     console.log('====> begin test');
//     return (dispatch, getState) => {
//         dispatch({type : "REQUEST_STARTED"});
        
//         myAjaxLib.post("/someEndpoint", {data : someValue})
//             .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response})
//             .catch(error => dispatch({type : "REQUEST_FAILED", error : error})
//     }  ,
// };
//c2 neu ko dung saga mu call api truc tiep trong action thi ben component
// sẽ gọi action callApi xong bên trong tự dispatch các action
// export function callApi(){
//     return (dispatch) => {
//         const a = fetch(
//             Promise.all(
//                 http.callapi,
//                 dispatch(search(input))
//             )
//         ).then(
//             dispatch(searchSuccess(data))
//         ).catch(
            
//             dispatch(searchError(error))
//         );

//     }
// };

export function searchSuccess(data){
    console.log('=====> search success')
    return {
        type: 'searchSuccess',
        data: data
    };
};
export function searchError(err){
    console.log('=====> search error')
    return {
        type: 'searchError',
        err: err
    };
};