const getProject=(state = { 

	data: [],
	loading: true
	
	}, action) => {
	
	switch(action.type) { 

		case "GETTING_PROJECT": 

			return {
				...state,
				loading: true
			}
		
		case "GOT_PROJECT":
			
			return {
				...state,
				data:action.payload,
				loading: false
			}
	
		default: 
			
			return {...state};

	}

}

export default getProject;