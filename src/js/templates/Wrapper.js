import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../actions/Page';

import {
  TransitionGroup,
} from 'react-transition-group';

import Transition from 'react-transition-group/Transition';



import Default from './default';

import { 
  NavLink,
  withRouter
} from 'react-router-dom';


class Wrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      opacity:0,
      in: false,
      duration: 250,
      delay: 150
    }

    this.getTemplate = this.getTemplate.bind(this);
  }
 

 componentDidMount() {
  this.setState({ in: true });

  this.getTemplate();
 }

 componentWillMount() {}

 getTemplate = () => {
    
 }

render () {
  
  const defaultStyle = {
    transition: `opacity ${this.state.duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 }
  };

    return(

   <TransitionGroup>
      <Transition in={this.state.in} appear={true} timeout={this.state.delay}>
        
        {(state) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            
            <Default slug={this.props.entry.params.slug} />
          </div>
        )}

      </Transition>
    </TransitionGroup>
      
    );
    
    

  }
}



export default withRouter(Wrapper);
 