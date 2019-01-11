

const getData=(state = { 

	data: [],
	loading: true
	
	}, action) => {
	
	switch(action.type) { 

		case "GETTING_DATA": 

			return {
				...state,
				loading: true
			}
		
		case "GOT_DATA":
			
			return {
				...state,
				data:action.payload,
				loading: false
			}
	
		default: 
			
			return {...state};

	}

}

export default getData;