import { combineReducers } from "redux";
import navigation from './Navigation';
import page from './Page';
import news from './News';
import sound from './Sound';


export default combineReducers({
	navigation,
	page,
	news,
	sound
});