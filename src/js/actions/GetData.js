import axios from 'axios';

const remote =	"/data/navigation.json";

export function getData(){

	return function(dispatch) {

		dispatch({ type: "GETTING_DATA" })

		axios.get(remote).then((response) => {
			dispatch({ type: "GOT_DATA", payload: response.data })	
		})

	}


}



