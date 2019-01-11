import React, { Component } from 'react';
import * as Media from '../../utils/Breakpoints';
import classnames from 'classnames'
import withSizes from 'react-sizes';

import { 
  NavLink
} from 'react-router-dom';

import { Window, Slider, Image, Content, Grid, Item, Link, LazyImage } from '../../components';

class Blocks extends Component {

  oriArray=[];

	constructor(props) {
    super(props);
    this.state = { };

  }

  componentDidMount() {}

	componentWillUnmount() {}


  render() {

    
    let { blocks, location, mod } = this.props;

    
   
    const blockSwitch = blocks.map(( b, ix ) => { 

      let type = b.acf_fc_layout;

      switch(type) {

        case "text_block":

          return( 
           
              <div className={"Block  Block--text "} key={ix}>

                  <div className="Block-content">
                      
                    <div className="Block-body">
                      <Content modifier={mod} html={b.text} />
                    </div>
                 
                 </div>
          
              </div> 
          );
        
        break;

        case "image_block":

          

          return( 
           
              <div className={"Block  Block--image"} key={ix}>

                  <div className="Block-content">
                      
                   <LazyImage src={b.image.sizes.mancoba_medium} ratio={b.image.width/b.image.height} /> 
                 
                 </div>

              </div> 
          );
        
        break;

        case "gallery_block": 
   
        let slides = b.slide.map((s,ix) => {

          let images = s.images;
          let caption = s.slide_caption;

          
          let imgs = images.map((i,ix) => { 

              return(
                 <LazyImage fluid={true} src={i.sizes.mette_large} ratio={i.width/i.height} /> 
              );
            });

            return(
             <div className="Image-container">{imgs}</div>
            );
          
        
        }); 
         
          return( 
            
              <div className="Block  Block--slider" key={ix}>

                <div className="Block-content">

                  <Slider className={"Slider--fluid"} autoplay={false} controls={false}>
                   { slides }
                  </Slider>

                  </div>
            </div>
            
          );
        break;

        default:
          return null;
      }

    })

    return (
      <div className={"Blocks  Blocks--"+(mod != undefined ? mod : "")}>

 		       {blockSwitch}
 		   
      </div>
    );
  }
}

const mapSizesToProps = ({ width, height }) => ({
  isMobile: width < 480
})

export default withSizes(mapSizesToProps)(Blocks);
