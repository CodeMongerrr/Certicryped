import { combineReducers } from "redux";
import auth from './auth';
import universites from './universities'

export default combineReducers({ auth, universites });