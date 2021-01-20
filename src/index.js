import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers/counter';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const logger = store => next => action => {
//     console.log('dispatch -> ', action);
//     let result = next(action); // 加载下一个中间件
//     console.log('next state -> ', store.getState());
//     return result;
// };

// const error = store => next => action => {
//     try {
//         next(action);
//     } catch(e) {
//         console.log('error -> ', e);
//     }
// };


// 创建 store 仓库
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error)); 
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk))); 
// store.subscribe( () => console.log('state: ', store.getState()));

// Rrdux 的例子
// const render = () => {
//     ReactDOM.render(
//         <App 
//             onIncreasment={ () => store.dispatch({ type: 'INCREASMENT'})}
//             onDecreasment={ () => store.dispatch({ type: 'DECREASMENT'})}
//             value={ store.getState() }
//         />,
//         document.getElementById('root')
//     );
// }; 

// // 先运行一次渲染
// render();
// store.subscribe(render);

// react-redux 的例子


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);