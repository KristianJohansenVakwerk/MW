import React, {Component} from 'react'

class AudioStream extends Component {

  constructor(props) {

  	super(props)

  	this.state = { isPlaying: this.props.play }
  }


  componentWillReceiveProps(nextProps) {
  	
	  this.setState({ isPlaying: nextProps.play });  

	  
  }

   togglePlay = (mode) => {

  	this.state.isPlaying = (mode === 'play') ? true : false;

    this.setState({ isPlaying: ( mode === 'play') ? true : false });
   
    // play / pause audio stream
    this.state.isPlaying ? this.refs.audio_tag.play() : this.refs.audio_tag.pause();
  }

  render () {

    const {
      trackUri,
      client_id,
      play
    } = this.props

    let soundfile = trackUri +'/stream?client_id='+client_id;

    return (
    	<div>
		    <audio ref={'audio_tag'} preload={"auto"} src={soundfile} />

		    <button onClick={() => {this.togglePlay('play')}} > Play </button>
	      	<button onClick={() => {this.togglePlay('pause')}}> Pause </button>

      	</div>
    
    )
  }
}

export default AudioStream
