import React, {Component} from 'react'

class Logo extends Component {

  render () {

    const {
      title
    } = this.props

    return (
      <div className="Logo">
      	<div className="Logo-body">
      		<span>{title}</span>
      	</div>
      </div>
    )
  }
}

export default Logo
