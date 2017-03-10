import actions from '../actions/index';

export default (state={}, action) => {
  switch (action.type) {
    case actions.OPEN_SIDEBAR: {
        return {...state, open: true };
    }

    case actions.CLOSE_SIDEBAR: {
        return {...state, open: false };
    }


    default: 
        return state;
    }
  
}