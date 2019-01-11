import React, { Component } from 'react';
import * as Media from '../../utils/Breakpoints';



class Image extends Component {

	constructor(props) {
    super(props);
    this.state = {width:0};
  }

  componentDidMount() {
    this.setState({width:this.refs.image.offsetWidth});
	}

	componentWillUnmount() {}

  render() {


	const ratioStyle = {

  		paddingTop:(100 / (this.props.ratio))+'%'

  	}
  	const fluidStyle = {

  		width:'100%',
  		height:'100%',
      position:'absolute',
      top:0,
      left:0

  	}

  	const style = (this.props.fluid) ? fluidStyle : ratioStyle;

    let className = this.props.className || '';

    if(this.props.fluid) className += " Image--fluid";

    const fallback = this.props.large || this.props.small || this.props.src;
    const small = (this.props.small) ? this.props.small : this.props.src;
    const medium = (this.props.medium) ? this.props.medium : this.props.src;
    const large = (this.props.large) ? this.props.large : this.props.src;

    
    if(!this.refs.image) return <div className={'Image '+className} ref="image" style={style}>{fallback}</div>

    let w = this.state.width * window.devicePixelRatio;
    let size = 'large';

    let src;

    src = large;
    if(w < 1000) src = medium;
    if(w < 600) src = small;
    
    if(!src) src = fallback;

    if(w < 1000) size = 'medium'
    if(w < 600) size = 'small';

    //console.log(this.props.svg)

    if(this.props.svg) src = this.props.svg
    



    return (
      <div className={'Image '+className} ref="image" style={style} data-width={w}>

 		       <div className="Image-media" style={{backgroundImage:"url("+src+")"}} title={this.props.title} />
 		   
      </div>
    );
  }
}

export default Image;
