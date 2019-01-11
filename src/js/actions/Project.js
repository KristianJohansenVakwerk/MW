import axios from 'axios';

const remote =	"/data";

let cache = []

export function getProject(slug){

	let split = slug.split('/');
	let splitLength = split.length;

	slug = (slug == '/') ? remote+"/home.json" : remote+"/"+split[splitLength-1]+".json";

	return function(dispatch) {

		dispatch({ type: "GETTING_PROJECT" })

		// check for cache
	    let cached = cache.find(c => {
	      return c.slug == slug
	    })

	    if(cached) {
	    	dispatch({type: "GOT_PROJECT", payload: cached.response.data })
	    } else {
	    	axios.get(slug)
	    	.then((response) => {
	    		cache.push({
	    			slug:slug,
	    			response:response
	    		})
				dispatch({ type: "GOT_PROJECT", payload: response.data })	
			})
	    }

		

	}


}



