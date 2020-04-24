import { ADD_CURRENT_LOCATION } from "../actionTypes";

const locationReducers = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      //   console.log("Reducer: ", state);
      return {
        ...state,
        currentLocation: action.payload,
        locations: [...state.locations, action.payload],
      };

    default:
      return state;
  }
};

export default locationReducers;
