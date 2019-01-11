const navData = [];

const getNavigation=(state = { 

	data: [],
	subNavData: [],	
	subNavLoading: true,
	subNavLoaded: false,
	loading: true
	
	}, action) => {
	
	switch(action.type) { 

		case "GETTING_NAVIGATION": 

			return {
				...state,
				loading: true
			}
		
		case "GOT_NAVIGATION":

			for( let i = 0; i < action.payload.length; i++ ) {
				let p = action.payload[i];
				let slug = p.slug;

				if(p.acf.add_page_to_nav) {
					navData.push({
						"title": p.title.rendered,
						"component": p.acf.template,
						"navText": p.acf.link_text,
						"id": p.id,
						"uri": slug,
						"nav": p.acf.navigation

					});	
				}
				
			}
			
			return {
				...state,
				data:navData,
				loading: false
			}

		case "GETTING_SUBNAV": 

			

			return {
				...state,
				subnavLoading: true,
				subNavLoaded: false
			}

		case "GOT_SUBNAV":
	
			const subNavData = [];

			for( let i = 0; i < action.payload.length; i++ ) {

				let p = action.payload[i];
				let slug = p.slug;
				let type = p.type
				let subNavTitle = (p.acf.subnav_title != null) ? p.acf.subnav_title: "";


				subNavData.push({
					"title": p.title.rendered,
					"component": p.type,
					"id": p.id,
					"uri": type+'/'+slug,
					"menuOrder": p.menu_order,
					"parentId": p.parent,
					"subNavTitle": p.acf.subnav_title
				});					

			}

			return {
				...state,
				subNavData:subNavData,
				subNavLoading: false,
				subNavLoaded: true
			}
	
		default: 
			
			return {...state};

	}

}

export default getNavigation;