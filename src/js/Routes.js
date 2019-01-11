import React, {Component} from 'react'
import { AnimatedSwitch } from 'react-router-transition';
import { 
  NavLink,
  withRouter,
  Route,
  Switch
} from 'react-router-dom';

import {TransitionWrapper} from './components'; 

import HOME from './templates/home';
import DEFAULT from './templates/default';
import NEWS from './templates/news';

class Routes extends Component {


  render () {

    return(

     <Route render={({location}) => { 
              
        return(
          <TransitionWrapper key={location.key}>
               
            <Switch location={location}>

                <Route exact path={"/"} render={() => ( <HOME /> )} /> 
                <Route exact path={"/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
                <Route exact path={"/projects/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
                <Route exact path={"/writings/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
                <Route exact path={"/press/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
                <Route exact path={"/news/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
                <Route path={""} render={() => <div>Not Found</div>} />

            </Switch>

          </TransitionWrapper> 

    );}} />

      );

  }
}

export default withRouter(Routes);
