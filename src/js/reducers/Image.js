const getPage=(state = { 

	data: [],
	loading: true,
	loaded: false

	}, action) => {
	
	switch(action.type) { 

		case "GETTING_IMAGE": 

			return {
				...state,
				loading: true,
				loaded: false
			}
		
		case "GOT_IMAGE":
				
			return {
				...state,
				data:action.payload[0],
				loading: false,
				loaded: true
			}
	
		default: 
			
			return {...state};

	}

}

export default getPage;