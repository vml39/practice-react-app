  import { ADD_BUILDING, ADD_TIME } from '../actions/index';

const initialState = {
  building: '',
  time: ''
};

function rootReducer(state = initialState, action) {
  switch(action.type) {

    case ADD_BUILDING:
      return {
        building: action.payload
      };
    case ADD_TIME:
      return {
        time: action.payload
      };

    default:
      return state;
  };
}

export default rootReducer;