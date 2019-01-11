import axios from 'axios';

const remote =	"http://ted.vakwerkdev.co.uk/wp-json/wp/v2/media";

let cache = []
let cachedData;

export function getImage(id){

	return function(dispatch) {

		dispatch({ type: "GETTING_IMAGE" })

		if(cachedData) {

			let activeData = [];

			let active = cachedData.find(el => {
				return el.id == id
			})
			
			activeData.push(active)

			dispatch({ type: "GOT_PAGE", payload: activeData });

		} else {

			axios.get(remote).then((response) => {



				let data = response.data;
				let activeData = [];

				cachedData = data;
			
				let active = data.find(el => {
					return el.id == id;
				});
				


				activeData.push(active)

					dispatch({ type: "GOT_IMAGE", payload: activeData })	

				})	

		}
		
	}


}



