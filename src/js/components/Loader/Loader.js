import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../../actions/Page';

import { 
  Route,
  Switch
} from 'react-router-dom';

const mapStateToProps = state => ({
  page: state.page.data,
  loading: state.page.loading
})

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPage: bindActionCreators(ACTIONS.getPage, dispatch),
  }
  
}



class Loader extends Component {

template = null;

 componentWillMount() {
 	let slug = this.props.path;
	this.props.fetchPage(slug); 
 
 }


 shouldComponentUpdate(nextProps, nextState) {
 	
 	if(nextProps.path != this.props.path) {
 		let slug = nextProps.path;
 		this.props.fetchPage(slug);
 		return true;
 	} else {
 		return true;
 	}
 	
 }

 getTemplateFile(name) {

 	if(name != undefined) {
 		
 		const TemplateFile = require('../../templates/' + name + '.js');

 		return TemplateFile.default;

 	} else {
 		
 		return null;

 	}

 	
 }

render () {

  	let { page,loading } = this.props;
  	if(loading) return null;

  	let Template = null;
  	if(page.template) {
  		this.template = page.template;
  		Template = this.getTemplateFile(page.template);
  	} else {
  		Template = this.getTemplateFile('default');
  	}
  	
  	
  	return(
      <Template entry={page} />
    );
   	
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
