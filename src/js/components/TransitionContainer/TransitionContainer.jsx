import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ACTIONS from '../../actions/Page'

import DEFAULT from '../../templates/default';

class TransitionContainer extends Component {
  
  oldPage = null;

  constructor(props) {
  	super(props);

  	this.state = {location: this.props.path };
  }

  componentDidMount() {
  	
  	let currentPath = this.props.path;
  	this.props.fetchPage(currentPath);
  	
  }  

 
  componentWillReceiveProps(nextProps) {

  	if(this.props.path !== nextProps.path) {

  		let currentPath = this.props.path;

  		// stores the old page to render in a componentDidMount
  		this.oldPage = this.props.currentPage;

  		// fetch the new page
  		let nextPath = nextProps.path;
  		this.props.fetchPage(nextPath);

  		

  		
  	}
  	  	
  }

  render () {

  	let { currentPage, loading } = this.props;

  	if(loading) return null;

  	console.log('TRANSITIONPAGE CURRENTPAGE',currentPage); 

  	console.log('this.oldPage',this.oldPage);

    return (
      <div className="Transition-container">

      	<div className="Transition-container-body" id="containerBody">
      		<DEFAULT title={currentPage.title.rendered} />
      		{ this.oldPage && <DEFAULT title={this.oldPage.title.rendered } /> }
	      	
      	</div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  currentPage: state.page.data,
  loading: state.page.loading,
  loaded: state.page.loaded
})

const mapDispatchToProps = (dispatch) => {
  
  return{
    fetchPage: bindActionCreators(ACTIONS.getPage, dispatch),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TransitionContainer);
