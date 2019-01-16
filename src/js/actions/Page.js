import axios from 'axios';
import _settings from '../_settings';
import SC from 'soundcloud';

const remote =	_settings.remote;


let cache = []
let cachedData = [];

export function getTrack(TRACK_ID) {

	SC.initialize({ client_id: _settings.CLIENT_ID });

	return (dispatch, getState ) => {
		
		const state = getState();

		dispatch({ type: "GETTING_SOUND" });

		if(TRACK_ID) {

			SC.get('/tracks/'+ TRACK_ID).then( function(track) {

				dispatch({ type: "GOT_SOUND", payload: {"track": track, "widget": SC} });

			});		
		} else {
			dispatch({ type: "NO_SOUND", payload: {} });
		}

		

	}
}

export function getPage(slug){

	let queryStrings = slug.split('/');
	let query = queryStrings.filter(function (el) {
	  return el != "";
	});
	
	let section = "";

	if(query.length > 1) {
		section = remote+'/'+queryStrings[1]+'?slug='+queryStrings[2];	
	} else {
		section = ( slug === 'home' ) ? remote+'/navigation?slug=home' : remote+'/navigation?slug='+queryStrings[1];	
	}
	

	return function(dispatch) {

		dispatch({ type: "CLEARING_PAGE" })		

		dispatch({ type: "GETTING_PAGE" })

			let cached = cachedData.find(el => {
				return el.cachedSlug == slug;
			});

			if(cached != undefined ) {

				dispatch({ type: "GOT_PAGE", payload: cached.cachedData })		

			} else {

					axios.get(section).then((response) => {
		
					let data = response.data;

					cachedData.push({
									'cachedSlug': slug,
									'cachedData' : data
								});

					dispatch({ type: "GOT_PAGE", payload: data })	
					dispatch(getTrack( data[0].acf.sound_track_id ));


					})	

			}

		
		

		
	}


}



export function clearPage()
{
  return function(dispatch)
  {
    dispatch({type: "CLEARING_PAGE"});
  }
}