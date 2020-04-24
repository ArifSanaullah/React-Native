import createDataContext from "./createDataContext";
import locationReducers from "../reducers/locationReducers";
import {
  startRecording,
  stopRecording,
  addLocation,
} from "../actions/locationActions";

export const { Context, Provider } = createDataContext(
  locationReducers,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
