import actions from '../actions/index';

export default (state={}, action) => {
  switch (action.type) {
    case actions.SEARCHED: {
        return false;
    }
    case actions.BACK_HOME: {
        return true;
    }
    default: 
        return state;
    } 
}