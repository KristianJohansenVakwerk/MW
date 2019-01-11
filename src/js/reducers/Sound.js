const getSound=(state = { 

	sound: {},
	loadingSound: true,
	loadedSound: false,
	soundExists : false
	
	}, action) => {
		
	switch(action.type) { 

		case "CLEARING_SOUND": 
		
			return {
				...state,
				loadingSound: true,
				loadedSound: false,
				soundExists : false
		}
		case "GETTING_SOUND": 

			return {
				...state,
				loadingSound: true,
				loadedSound: false,
				soundExists : false
			}
		
		case "GOT_SOUND":

			console.log('action payload',action.payload);
			
			return {
				...state,
				sound:action.payload,
				loadingSound: false,
				loadedSound: true,
				soundExists : true
			}

		default: 
			
			return {...state};

	}

}

export default getSound;