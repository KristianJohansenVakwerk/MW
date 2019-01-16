import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import * as ACTIONS from '../actions/Page'
import * as SOUNDACTIONS from '../actions/Sound'
import { TweenLite, Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { 
  NavLink,
  withRouter,
  Route
} from 'react-router-dom';

import { Blocks, Grid, Content, Sound, Slideshow, Title} from '../components';


const mapDispatchToProps = (dispatch) => {
  
  return{
    fetchSound: bindActionCreators(ACTIONS.getTrack, dispatch)
  }
  
}

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = { fullText: false, readMore: false, mode: "image" }

  }
 
 componentDidMount() {}

 componentDidUpdate(prevProps, prevState) {

    if(prevProps.page) {
        
      if(prevProps.page.acf.sound_track_id !== this.props.page.acf.sound_track_id) {
        this.props.fetchSound(this.props.page.acf.sound_track_id);
      }
      
    }
  
 }

render () {
  
   return (

      <div className={"Template  Template--page  Template--"+this.state.mode} id="template">
        
          {this.props.title}

      </div>  

    );


  }
}

export default withRouter(connect(null, mapDispatchToProps)(Page));
