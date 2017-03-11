import actions from '../actions/index';

export default (state={}, action) => {
  switch (action.type) {
    case actions.OPEN_POPUP: {
        return {...state, show: action.payload.show, url: action.payload.url, text: action.payload.text };
    }
    case actions.CLOSE_POPUP: {
        return {...state, show: false, url: "", text: "" };
    }
    
    default: 
        return state;
    }
}