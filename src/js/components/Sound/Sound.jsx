import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../../actions/Sound'
import _settings from '../../_settings';

import { AudioStream } from '../../components';

const mapStateToProps = state => ({
  sound: state.sound.sound,
  loading: state.sound.loadingSound,
  loaded: state.sound.loadedSound
})

const mapDispatchToProps = (dispatch) => {
  
  return{
    fetchSound: bindActionCreators(ACTIONS.fetchSound, dispatch),
   }
  
}

class Sound extends Component {

  audioStream={};

  constructor(props) {

  	super(props);

  	this.state = { isPlaying : false };

  }


  componentDidMount() { 


	  	let trackId = this.props.trackId;
      this.props.fetchSound(this.props.trackId);
      
  }

  componentDidUpdate(prevProps, prevState) {
     console.log('prevProps',prevProps.trackId, 'props',this.props.trackId)  
    
    if(prevProps.trackId !== this.props.trackId) {
      this.props.fetchSound(this.props.trackId);
    } 
  }

  render () {

  	let { sound, loaded } = this.props;

    return (

    <div className="Sound">

    	<div className="Sound-track">
        { loaded && <AudioStream trackUri={sound.uri} client_id={_settings.CLIENT_ID} /> }
      </div>

  	</div>

    )

  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Sound);
