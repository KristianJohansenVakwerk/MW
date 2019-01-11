import React, {Component} from 'react'

import { 
  NavLink,
  withRouter,
  Route,
  Switch
} from 'react-router-dom';

import {TransitionWrapper, RouteTransition} from '../../components'; 

import HOME from '../../templates/home';
import DEFAULT from '../../templates/default';
import NEWS from '../../templates/news';
import ABOUT from '../../templates/about';

class Routes extends Component {


  render () {

    return (

       <RouteTransition pathname={this.props.location.pathname}>

        <Route render={({location}) => { 

          return(

            <Switch location={location} key={location.key}>

                <Route exact path={"/"} render={() => ( <HOME/> )} /> 
                <Route exact path={"/news"} component={NEWS} /> 
                <Route exact path={"/about"} component={ABOUT} /> 
                <Route path={"/404"} render={() => <div>Not Found</div>} />

            </Switch>


          );

      }} />

      </RouteTransition> 
  
              
    );

  }
}

export default withRouter(Routes);
