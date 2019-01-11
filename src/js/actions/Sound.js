import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import _settings from '../_settings';
import SC from 'soundcloud';

let cache = []
let cachedData = [];

export function fetchSound(TRACK_ID){

	SC.initialize({ client_id: _settings.CLIENT_ID });

	console.log(TRACK_ID);

	if(TRACK_ID) {
	
	return function(dispatch) {

		dispatch({ type: "CLEARING_SOUND" })		

		dispatch({ type: "GETTING_SOUND" })
			
			SC.get('/tracks/'+ TRACK_ID).then( function(track) {

				dispatch({ type: "GOT_SOUND", payload: track });

			});	

	}

	} else {

		return function(dispatch) {
		
			dispatch({ type: "NO_SOUND", payload: "" });
		
		}

	}
}

export function clearSound() {
	
	return function(dispatch) {
		dispatch( { type : "NO_SOUND" });	
	}
	
}