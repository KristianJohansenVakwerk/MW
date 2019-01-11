import React, { Component } from 'react';
import * as Media from '../../utils/Breakpoints';





class LazyImage extends Component {

  img;

	constructor(props) {
    super(props);
    this.state = {loaded: true, error: false };
  }

  componentDidMount() {
  
    // this.img = new Image();

    // this.img.onload = () => {
    //   this.setState({
    //     loaded: true
    //   });
    // };

    // this.img.onerror = () => {
    //   this.setState({
    //     error: true
    //   });
    // };

    // this.img.src = this.props.src;



	}

	componentWillUnmount() {
    // this.img = null;
  }

  render() {


     const ratioStyle = {

          paddingTop:(100 / (this.props.ratio))+'%',
          

      }
        
      const fluidStyle = {

          width:'100%',
          height:'100%',
          position:'absolute',
          top:0,
          left:0,
  
      }

      const style = (this.props.fluid) ? fluidStyle : ratioStyle;

      let className = this.props.className || '';

      if(this.props.fluid) className += " Image--fluid";

          return (

            <div className={'Image  Image--loaded '+className+" Image--"+(this.state.loaded ? "loaded" : "loading")} ref="image" style={style}>

                 <div className="Image-media" style={{backgroundImage:"url("+this.props.src+")", opacity: (this.state.loaded ? 1 : 0)}} title={this.props.title} />
             
            </div>

          );
      

  }
}

export default LazyImage;
