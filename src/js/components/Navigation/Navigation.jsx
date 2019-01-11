import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as NAVACTIONS from '../../actions/Navigation';


import { 
  NavLink,
  withRouter  
} from 'react-router-dom';

import { SubNav, SubProjects } from '../../components'

class Navigation extends Component {

  activeId = 0;

   constructor(props) {
	    super(props);

	    this.state = {
        activeSubPage: 0
      }

      this._onClick = this._onClick.bind(this);
      this._getActiveParent = this._getActiveParent.bind(this);
      
   }

   componentDidMount() {
    
    this.props.fetchNavigation();


    let q = this.props.location.pathname.split('/');

    q = q.filter( el => {
      return el != "";
    })
    q = "/"+q[0];
    
    this.props.fetchSubNav(q);

  }


  _onClick = (event) => {

    let slug = event.target.getAttribute("href");
    this.props.fetchSubNav(slug);

    this.activeId = 0;

  }

  _getActiveParent = ( id ) => {
    
    this.activeId = id;

    return null;

  }


  render () {
    
  	const { navigation, loading, subnav, subNavLoading, subNavLoaded } = this.props; 

  	if(loading) return null;

    const mainNav = navigation.map((p, ix) => { 

      let navText = (p.navText != "") ? p.navText : p.title;

      return(
            <li className="List-item" key={ix}>
              <NavLink 
                to={'/'+p.uri+'/'} 
                isActive={(match, location) => location.pathname == "/"+p.uri}
                activeClassName={'is-active'}
                onClick={this._onClick}
              >
              {navText}
              </NavLink>
            </li>
        );
      
    });

 
  
    return (

        <div className="Navigation">
          
                <ul className="List  List--mainNav">
                  { mainNav }     
                </ul> 

                <SubNav items={subnav} curUri={this.props.location.pathname} activeId={this.activeId} activeParent={this._getActiveParent}/> 

                <SubProjects items={subnav} curUri={this.props.location.pathname} activeParent={this._getActiveParent} /> 

        </div>


      	
    )
  }

}

const mapStateToProps = state => ({
  navigation: state.navigation.data,
  loading: state.navigation.loading,
  subnav: state.navigation.subNavData,
  subNavLoading: state.navigation.subNavLoading,
  subNavLoaded: state.navigation.subNavLoaded
})


const mapDispatchToProps = (dispatch) => {

  return{
  
      fetchNavigation: bindActionCreators(NAVACTIONS.getNavigation, dispatch),
      fetchSubNav: bindActionCreators(NAVACTIONS.getSubNav, dispatch),
  
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
