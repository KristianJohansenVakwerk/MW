import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../actions/Page';

import { 
  NavLink,
  withRouter
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

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {}

  }
 
  componentDidMount() {
    
    this.props.fetchPage('about'); 
  }

  
  componentWillMount() {}

render () {

  let { page,loading } = this.props;
  if(loading) return null;
  
  return(
  
      <div className={"Template  Template--default Template--"+page.title.rendered.toLowerCase()}>

        {page.title.rendered}
      </div>  

    );
    
    

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
 