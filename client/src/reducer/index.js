import { combineReducers } from "redux";
import auth from "./userSlice";
import bus from "./bus"
import trip from './trip'
import booking from './booking'
export default combineReducers({
	auth,
	bus,
	trip, 
	booking
});