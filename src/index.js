import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Redux/Reducers/root'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import  './css/animate.min.css'
import './css/linea-icon.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'

const store = createStore(
    rootReducer,
    
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
)

ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
