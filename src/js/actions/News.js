import axios from 'axios';
import _settings from '../_settings';

const remote =	_settings.remote+"/news?orderby=date&order=asc";


let cache = []
let cachedData;

export function getNews(slug){
	
	return function(dispatch) {


		dispatch({ type: "CLEARING_NEWS" })		

		dispatch({ type: "GETTING_NEWS" })

		if(cachedData) {

		
			dispatch({ type: "GOT_NEWS", payload: cachedData });

		} else {
	
			axios.get(remote).then((response) => {
			
			let data = response.data;

			cachedData = data;

			dispatch({ type: "GOT_NEWS", payload: data })	

			})	

		}
		
	}


}



export function clearNEWS()
{
  return function(dispatch)
  {
    dispatch({type: "CLEARING_NEWS"});
  }
}