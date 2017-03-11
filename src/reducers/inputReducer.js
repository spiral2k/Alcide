import actions from '../actions/index';

export default (state={}, action) => {
  switch (action.type) {
    case actions.SET_VALUE: {
        return {...state, text: action.payload};
    }
    case actions.ADD_CHAR: {
        return {...state, text: state.text + action.payload}
    }
    case actions.REMOVE_CHAR: {
        return { ...state, text: state.text.substring(0, state.text.length - 1) }
    }
    case actions.BACK_HOME: {
        return {...state, text: ""};
    }

    default: 
        return state;
    }  
}