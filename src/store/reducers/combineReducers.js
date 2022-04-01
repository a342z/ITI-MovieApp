import { combineReducers } from "redux";
import favouritesReducer from "./favourite";

export default combineReducers({
    favourites: favouritesReducer
  });
  