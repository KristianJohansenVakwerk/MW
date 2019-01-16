const getSound=(state = { 

	sound: {},
	loadingSound: true,
	loadedSound: false,
	
	}, action) => {
		
	switch(action.type) { 

		case "CLEARING_SOUND": 
		
			return {
				...state,
				loadingSound: true,
				loadedSound: false,
		}
		case "GETTING_SOUND": 

			return {
				...state,
				loadingSound: true,
				loadedSound: false,
			}
		
		case "GOT_SOUND":


			return {
				...state,
				sound:action.payload,
				loadingSound: false,
				loadedSound: true,
			}

		case "NO_SOUND":


			return {
				...state,
				sound:{},
				loadingSound: false,
				loadedSound: false,
		
		}

		default: 
			
			return {...state};

	}

}

export default getSound;