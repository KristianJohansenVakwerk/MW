import axios from 'axios';
import _settings from '../_settings';

const remote =	_settings.remote+"/navigation?orderby=menu_order&order=asc";


const navData = [];
export function getNavigation(){

	return function(dispatch) {

		dispatch({ type: "GETTING_NAVIGATION" })


		axios.get(remote)
		.then((response) => {

			return(
				dispatch({ type: "GOT_NAVIGATION", payload: response.data })	
			);
		})

	}
}

const subRemote = _settings.remote;

export function getSubNav(path) {

	path = subRemote+path+"/?orderby=menu_order&order=asc&per_page=100";
	

	return function(dispatch) {

		dispatch({ type: "GETTING_SUBNAV" })

		axios.get(path)
		.then((res) => {
			
		
			return(
				dispatch({ type: "GOT_SUBNAV", payload: res.data })	
			);

		})
		.catch((error) => {

			return(
				dispatch({ type: "GOT_SUBNAV", payload: [] })	
			);

		})
	}
}


