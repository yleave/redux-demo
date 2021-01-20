import * as actions from '../constants';

const initUserInfo = {
    user: [],
    userData: {},
    isFetching: false,
    error: null
};

const user = ( state = initUserInfo, action ) => {
    switch(action.type) {
        case actions.ADD_USER:
            // console.log('before state: ', state);
            // state.push(action.user);
            // console.log('after state: ', state);
            let user = state.user.concat(action.user);
            return {
                user: user,
                userData: state.userData,
                isFetching: false,
                error: null
            };
        case actions.FETCH_USER_DATA_SUCCESS:
            return {
                user: state.user,
                userData: action.userData,
                isFetching: false,
                error: null
            };
        case actions.FETCH_USER_DATA_REQUEST:
            return {
                user: state.user,
                userData: {},
                isFetching: true,
                error: null
            };
        case actions.FETCH_USER_DATA_FALIURE:
            return {
                user: state.user,
                userData: {},
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default user;