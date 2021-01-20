import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import { bindActionCreators } from 'redux';

class User extends Component {
    

    render() {
        console.log(this.props);
        const { userActions } = this.props;
        const { user, userData, isFetching, error } = this.props;
        let data = '';
        if (error) {
            data = error;
        } else if (isFetching) {
            data = 'Loading...';
        } else {
            data = userData.title;
        }

        return (
            <div className='text-center'>
                {/* <br />
                <h1>{this.props.users}</h1>
                <button className='btn btn-toolbar' onClick={this.props.addUser}>addUser</button>
                <br />
                <h3>{this.props.userData.title}</h3>
                <button className='btn btn-toolbar' onClick={this.props.fetchUserData}>fetcuUserData</button> */}
                <br /><br />
                <h1>{ user }</h1>
                <button className='btn btn-primary' onClick={() => userActions.addUser('ye')}>addUser</button>
                <br /><br /><br />
                <h3>{ data }</h3><br />
                <button className='btn btn-primary' onClick={() => userActions.fetch_user()}>fetcuUserData</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userData: state.user.userData,
        isFetching: state.user.isFetching,
        error: state.user.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);