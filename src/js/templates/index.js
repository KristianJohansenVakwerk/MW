import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { 
  NavLink,
  withRouter
} from 'react-router-dom';


import { Navigation, SubNav, Logo, Sound } from '../components';
import Routes from '../Routes.js';


const mapStateToProps = state => ({
  page: state.page.data,  
  loaded: state.page.loaded
});



class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {}

  }

  componentWillMount() {

  }

  componentDidMount() {

    
  }
 
  render() {
    
    let { page, loaded } = this.props;

    return (

      <div className="Site-page">

        <div className="Site-head">

          <div className="Site-logo">
            <Logo title={'Mette Woller'} />
          </div>
            
          <div className="Site-nav">

            <Navigation loc={this.props.location.pathname} />
            
          </div>

          <div className="Site-subNav">
            
          </div>

        </div>

        <div className="Site-body">
  
          <Routes />
      
        </div>

    
    </div>
      
    );
  }
}





export default withRouter(connect(mapStateToProps)(Layout));
