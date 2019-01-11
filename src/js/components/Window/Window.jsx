import React, { Component } from 'react';

class Window extends Component {

	constructor(props) {
    super(props);
    this.state = {w:window.innerWidth,h:window.innerHeight};
  }
  
  componentDidMount() {

	  window.addEventListener('resize',this.resize);
	
	}
	
	componentWillUnmount() {
	    window.removeEventListener('resize',this.resize);
	  }
	  
	 resize = () =>{

	 this.setState({w:window.innerWidth,h:window.innerHeight});

	}
  
  render() {

    return (
      <div {... this.props } style={{...this.props.style,width:this.state.w,height:this.state.h}}>
 		{ this.props.children }
      </div>
    );
  }
}

export default Window;
