import * as actions from '../constants';

// export function increment(num) {
//     return {
//         type: actions.INCREMENT,
//         num
//     };
// }

export function increment(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actions.INCREMENT,
                num
            });
        }, 1000);
    };
}

export function decrement(num) {
    // return {
    //     type: actions.DECREMENT,
    //     num
    // };
    return dispatch => {
        dispatch({
            type: actions.DECREMENT,
            num
        });
    };
}