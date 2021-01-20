import * as actions from '../constants';

export function addUser(user) {
    return {
        type: actions.ADD_USER,
        user
    };
}

function fetch_user_data_success(userData) {
    return {
        type: actions.FETCH_USER_DATA_SUCCESS,
        userData
    }
};

function fetch_user_data_request() {
    return {
        type: actions.FETCH_USER_DATA_REQUEST,
    }
};

function fetch_user_data_faliure(error) {
    return {
        type: actions.FETCH_USER_DATA_FALIURE,
        error
    }
};

export function fetch_user() {
    return dispatch => {
        dispatch(fetch_user_data_request());
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user_data_success(data.chengpinDetails[0]));
        })
        .catch(error => {
            dispatch(fetch_user_data_faliure(error));
            console.log('error: ', error);
        });
    };
}
