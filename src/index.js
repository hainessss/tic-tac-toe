import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'redux/createStore';
import AppRoutes from 'routes/index';
import './styles/core.scss';
import Theme from './components/Theme';
import Globals from './components/Globals';


ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <div>
        <Globals />
        <AppRoutes />
      </div>
    </Theme>
  </Provider>,
  document.getElementById('root'),
);
