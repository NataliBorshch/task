import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
//store
import store from './redux/store';
// components
import App from './App';
import Spinner from './components/Spinner';
// styles
import './index.scss';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={<Spinner />} persistor={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
