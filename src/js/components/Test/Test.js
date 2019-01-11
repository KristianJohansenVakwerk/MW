import React, {Component} from 'react'


class Test extends Component {



  render () {


  	if(!this.props.loading) {
  		return (
	      <div> Done Loading </div>
	    );	
  	} else {
  		return (
	      <div> Loading </div>
	    );	
  	}
   	
    

  }
}

export default Test
