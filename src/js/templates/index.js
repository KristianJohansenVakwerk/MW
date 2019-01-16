import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import _settings from '../_settings';

import { 
  NavLink,
  withRouter
} from 'react-router-dom';


import { Navigation, SubNav, Logo, Sound, AudioStream } from '../components';
import Routes from '../Routes.js';


const mapStateToProps = state => ({
  sound: state.sound.sound
});



class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = { progress: { width: 100+"%" }}

    this.progress = this.progress.bind(this);


  }

  componentWillMount() {}

  componentDidMount() {}

  progress = (pct) => {
    let newWidth = 100 - pct;
    this.setState({ progress: { width: newWidth+"%" } });
    
  }
 
  render() {
    
    let { sound } = this.props;

    
    console.log(this.state.progress)
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

        <div className="Site-foot">

          <div className="Site-foot-bg" style={this.state.progress}></div>
          
          <div className="Site-foot-audio">
           { sound.track &&  <AudioStream trackUri={sound.track.uri} client_id={_settings.CLIENT_ID} trackTitle={sound.track.title} trackDuration={sound.track.duration} widget={sound.widget} progress={this.progress}  /> }
           </div>
        </div>
    
    </div>
      
    );
  }
}





export default withRouter(connect(mapStateToProps)(Layout));
