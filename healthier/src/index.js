import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  store  from './features/store'
import { Provider } from 'react-redux';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
</style>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);