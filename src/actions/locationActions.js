import { ADD_CURRENT_LOCATION } from "../actionTypes";

export const startRecording = (dispatch) => () => {};
export const stopRecording = (dispatch) => () => {};

export const addLocation = (dispatch) => (location) => {
  dispatch({
    type: ADD_CURRENT_LOCATION,
    payload: location,
  });
};
