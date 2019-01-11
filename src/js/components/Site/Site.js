import React, {Component} from 'react'
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {
   	page: state.page.data,
   	loading: state.page.loading
  };
}

class Site extends Component {

	constructor(props) {
		super(props)
	}

	
	render()

	{
		
		let {page, loading} = this.props
		let modifier;
		let mods;
		let modArray = [];

		if(page == undefined ) {

			mods = "standard"

		} else {

			if(!loading) {

			let type = page.type;
			let sound = (page.acf.sound_on_this_page) ? "sound" : "";
			let slug = page.slug.replace(/[^a-z0-9]/g, '');


			modArray.push(slug, sound, type );

			
			modArray.map((mod, ix) => { 
				
				if(mod !== undefined) {

					return(
						mods += "  Site--"+mod
					);	

				}
				
			});

			modifier = mods;

			}

		}
	
		return (
			<div className={"Site "+modifier}>
				{this.props.children}
			</div>
		);
	}

}

export default connect(mapStateToProps)(Site)