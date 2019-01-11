import React, {Component} from 'react'

class Blank extends Component {

  render () {

    const {
      title,
      mod,
    } = this.props

    return (
      <div className={"Grid  Grid--"+mod} >
	      {this.props.children}
       </div>
    )
  }
}

export default Blank
