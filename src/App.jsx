import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';
import UserListApp from './containers/UserListApp';

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <UserListApp />
    </Provider>
  );
}

export default App;
