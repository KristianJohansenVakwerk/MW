const getPage=(state = { 

	data: null,
	loading: true,
	loaded: false
	
	}, action) => {
	
	switch(action.type) { 

		case "CLEARING_PAGE": 
		
			return {
				...state,
				loading: true,
				loaded: false
		}
		case "GETTING_PAGE": 

			return {
				...state,
				loading: true,
				loaded: false
			}
		
		case "GOT_PAGE":
			
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