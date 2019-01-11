const getNews=(state = { 

	data: [],
	loading: true,
	loaded: false
	
	}, action) => {
	
	switch(action.type) { 

		case "CLEARING_NEWS": 
		
			return {
				...state,
				loading: true,
				loaded: false
		}
		case "GETTING_NEWS": 

			return {
				...state,
				loading: true,
				loaded: false
			}
		
		case "GOT_NEWS":
			
			return {
				...state,
				data:action.payload,
				loading: false,
				loaded: true
			}

		
	
		default: 
			
			return {...state};

	}

}

export default getNews;