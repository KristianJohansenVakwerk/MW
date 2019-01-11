import React, {Component} from 'react'


import { Image, Video } from "../../components";

class Media extends Component {

	render()
	{
		let {src,kind,fluid,ratio,controls,autoplay,playOnVisible, className} = this.props

		switch(kind)
		{
			case 'video':
				return (
					<Video src={src} fluid={fluid} ratio={ratio} controls={controls} autoplay={autoplay} className={className} playOnVisible={playOnVisible} />
				);
			default: 
				return (
					<Image src={src} fluid={fluid} className={className} ratio={ratio} />
				);
		}

		
	}

}

export default Media