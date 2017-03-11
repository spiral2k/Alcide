import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/index';
import Index from '../containers/Index';

const middlewares = applyMiddleware(thunk, logger());

const initialState = {
    sidebar: {
      open: 0,
    },
    images: {
      imagesArr: [],
      history: [],
      pixabay: {
        fetching: false,
        fetched: false,
        error: false   
      },
      flickr: {
        fetching: false,
        fetched: false,
        error: false   
      }
    },
    popup: {
      show: false,
      url: "",
      text: ""
    },
    home: true,
    input: {
      text: "",
      term: ""
    }
}

const App = () => {
    return (
      <Provider store={createStore(reducers, initialState, middlewares)}>
        <Index />
      </Provider>
    );
}

export default App;
