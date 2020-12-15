import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
import * as Types from './store/actions/types';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

const token = localStorage.getItem('auth_token')
if(token){
  
  setAuthToken(token)  
  let decode = jwtDecode(token);

  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode
    }
  })
}

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

