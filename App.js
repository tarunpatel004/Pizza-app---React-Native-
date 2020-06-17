import React, { Component } from 'react';
import AppNavigator from './navigation/app_navigator'
import { Provider } from 'react-redux';
import configureStore from './store/pizzaStore'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
              <AppNavigator />
            </Provider>;
  }
}
