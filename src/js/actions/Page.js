import axios from 'axios';
import _settings from '../_settings';

const remote =	_settings.remote;


let cache = []
let cachedData = [];

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