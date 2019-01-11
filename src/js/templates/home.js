import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import * as ACTIONS from '../actions/Page'
import { TweenLite, Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { 
  NavLink,
  withRouter
} from 'react-router-dom';

import { Blocks, Grid } from '../components';

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
  this.props.fetchPage("home");
 }


 componentWillMount() {}


render () {

  let { page,loading } = this.props;
  
  console.log('PAGE',page);

  if(loading) return null;

  return(

      <div className={"Template  Template--home"}>

        <Helmet>
          <title> Mette Woller </title>
        </Helmet>

        <div className={"Template-head"}>
          <h1 className="Template-title">{page.title.rendered}</h1>
        </div>

        


  
      </div>  

       

    );

  
    

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
