import React, {Component} from 'react'
import { AnimatedSwitch } from 'react-router-transition';
import { 
  NavLink,
  withRouter,
  Route,
  Switch
} from 'react-router-dom';

import {TransitionWrapper, TransitionContainer} from './components'; 

import HOME from './templates/home';
import DEFAULT from './templates/default';
import NEWS from './templates/news';

class Routes extends Component {

  constructor(props) {

    super(props);

    this.state = { path: this.props.location.pathname }
  }

  componentDidUpdate(prevProps, prevState) {

    if(this.props.location.pathname !== prevState.path ) {
      this.setState({ path: this.props.location.pathname });
    }
    
  }

  render () {

    
    return(

      <TransitionContainer path={this.state.path}  key={ this.props.location.key }>
        <Switch>

           <Route exact path={"/"} render={() => ( <HOME /> )} /> 
           <Route exact path={"/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
           <Route exact path={"/projects/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
           <Route exact path={"/writings/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
           <Route exact path={"/press/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
           <Route exact path={"/news/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
           <Route path={""} render={() => <div>Not Found</div>} />

        </Switch>
      </TransitionContainer>


    //  <Route render={({location}) => { 
              
    //     return(
    //       <TransitionWrapper key={location.key}>
               
    //         <Switch location={location}>

    //             <Route exact path={"/"} render={() => ( <HOME /> )} /> 
    //             <Route exact path={"/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
    //             <Route exact path={"/projects/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
    //             <Route exact path={"/writings/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
    //             <Route exact path={"/press/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
    //             <Route exact path={"/news/:slug/"} render={({match}) => ( <DEFAULT entry={match} /> )} /> 
    //             <Route path={""} render={() => <div>Not Found</div>} />

    //         </Switch>

    //       </TransitionWrapper> 

    // );}} />

      );

  }
}

export default withRouter(Routes);
