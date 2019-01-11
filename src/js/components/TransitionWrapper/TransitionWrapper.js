import React, {Component} from 'react';

import { 
  withRouter
} from 'react-router-dom';


import {
  TransitionGroup,
} from 'react-transition-group';

import Transition from 'react-transition-group/Transition';

class TransitionWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      opacity:0,
      in: false,
      duration: 350,
      delay: 250
    }

  }
 

  componentDidMount() {
    this.setState({ in: true });
  }

  componentWillMount() {}

 

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
          <div 
            className={"Transition-wrapper"}
            style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {this.props.children }
          </div>
        )}

      </Transition>
    </TransitionGroup>
      
    );
    
    

  }
}



export default withRouter(TransitionWrapper);
 