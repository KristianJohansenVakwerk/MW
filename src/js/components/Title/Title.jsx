import React, {Component} from 'react'

import { Image } from '../../components';

class Title extends Component {

  render () {

    const {
      page
    } = this.props

 
    if( page.acf.alternativ_page_title ) {
  		
  		let ratio = page.acf.alternativ_page_title_height/page.acf.alternativ_page_title_width;
  		let w = (page.acf.alternativ_page_title_width/687)*100;

  		if(w >= 100) w = 80; 
    	return (
	     	<div className="Template-title  Template-title--alt" style={ { width: w+"%" }} ><Image src={page.acf.alternativ_page_title.url} ratio={ratio} className="Image--pageTitle" /></div>
	    )

    } else {
    	
    	return(
    		<div className="Template-title"><h1>{page.title.rendered}</h1></div>
    	);
    }

    
  }
}

export default Title
