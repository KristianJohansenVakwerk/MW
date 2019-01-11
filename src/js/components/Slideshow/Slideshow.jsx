import React, {Component} from 'react'

import { Window, Content, LazyImage, Slider, Video } from '../../components';

class Slideshow extends Component {

  render () {
  	const { slides } = this.props;

  	if( !slides.slide.length ) return null;
  	
  	let output = slides.slide.map((s,ix) => { 
  		
  		switch(s.acf_fc_layout) {

  			case "image": 

  				let imgs = s.images.map((i,ix) => { 
					return(
						<LazyImage fluid={true} src={i.sizes.mette_large} ratio={i.width/i.height} key={ix} /> 
					);
  				});

  				return <div className="Image-container" key={ix} >{imgs}</div>
  				
  			break;

  			case "video":
  				
  				return (
  					<div className="Video-container"><Video id={s.video_id} handler={s.video_handler} key={ix} /></div>
  				);
  			break;

  			default:

  			return (<div> Nothing </div> );
  		}

  	});


    return (
      <Slider className={"Slider--fluid"} autoplay={false} controls={false}>
	      {output}
      </Slider>
    )
  }
}

export default Slideshow
