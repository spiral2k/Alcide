import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/index';

import Index from '../containers/index';

const initialState = {
    sidebar: {
      open: 0 
    }
}

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, initialState)}>
        <Index />
      </Provider>
    );
  }
}

export default App;
