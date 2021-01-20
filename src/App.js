import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { increment, decrement } from './actions/counter';
import * as counterActions from './actions/counter';
import * as userActions from './actions/user';
import { bindActionCreators } from 'redux';
import User from './component/User';    

class App extends Component{
    
  // 使用 redux 的例子
    // render() {
    //     return (
    //         <div className="App">
                
    //             <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
    //             <p className="text-center">
    //                 <button onClick={this.props.onIncreasment} className='btn btn-primary'>increasment</button>  
    //                 <button onClick={this.props.onDecreasment} className='btn btn-success'>decreasment</button>
    //             </p>
                
    //         </div>
    //     );
    // }

    // 使用 react-redux 的例子
    render() {
      console.log('this.props: ', this.props);
    //   const { increment, decrement } = this.props;
      const { counterActions, userActions } = this.props;
      return (
          <div className="App">
              
              <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
              <p className="text-center">
                  <button onClick={() => { counterActions.increment(10); }} className='btn btn-primary'>increment</button>  
                  <button onClick={() => { counterActions.decrement(5); }} className='btn btn-success'>decrement</button>
              </p>
              {/* <User 
                users={this.props.user}
                userData={this.props.userData}
                addUser={() => { userActions.addUser('ye'); }}
                fetchUserData={() => (userActions.fetch_user())} 
                /> */}
                <User />
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user.user,
        userData: state.user.userData,
    };
};

// const mapDispatchToPorps = (dispatch) => {
//     return {
//         increment: () => { dispatch(increment()) },
//         decrement: () => { dispatch(decrement()) }
//     };
// };

const mapDispatchToPorps = (dispatch) => {
    return {
        counterActions: bindActionCreators(counterActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToPorps)(App);
