import React, {Component} from 'react'

import { NavLink } from "react-router-dom";

class Link extends Component {

	constructor(props) {
		super(props)
	}

	
	render()

	{
		
		return (
			<div className={"Link"}>
				{this.props.children }
			</div>
		);
	}

}

export default Link;