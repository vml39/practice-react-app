// action types 
export const ADD_BUILDING = 'ADD_BUILDING';
export const ADD_TIME = 'ADD_TIME';


// action creators
export function addBuilding(newBuilding) {
  return { 
    type: ADD_BUILDING, 
    payload: newBuilding
  };
}

export function addTime(newTime) {
  return { 
    type: ADD_TIME, 
    payload: newTime
  };
}