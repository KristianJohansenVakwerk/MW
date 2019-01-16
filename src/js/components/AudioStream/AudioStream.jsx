import React, {Component} from 'react'

class AudioStream extends Component {

  isPaused=false;
  time=0;
  interval=1000;

  constructor(props) {

  	super(props)

  	this.state = { isPlaying: false, currentTime: "00:00:00", currentTimeInMiliSec: 0, duration: "", progress: 0 };

    this.convertDuration = this.convertDuration.bind(this);
    this.intervalTimer = this.intervalTimer.bind(this);
    this.progress = this.progress.bind(this);
    
  }


  componentDidMount() {

    let duration = this.convertDuration(this.props.trackDuration);

    this.setState({ duration: duration })

  }

  componentDidUpdate(prevProps) {

    if( this.props.trackDuration !== prevProps.trackDuration ) {
      this.setState({ currentTime: 0 });
      let duration = this.convertDuration(this.props.trackDuration);

      this.setState({ duration: duration })


    }

  }

  convertDuration(duration) {


      let milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      let totalLength = hours + ":" + minutes + ":" + seconds


      return totalLength;
      
  }


  intervalTimer(mode) {
    
    let interval = 1000;
    let _this = this;
    let startTime, remaining, state = 0;


    if(mode === 'play') {
    
      startTime = new Date();
      this.timer = setInterval( _this.currentTime, interval);
    
    } else {

      remaining = interval - (new Date() - startTime);
      clearInterval(this.timer);

    }

  }

  currentTime = () => {

    this.setState({ currentTimeInMiliSec: this.state.currentTimeInMiliSec+1000 });

    let t = this.convertDuration(this.state.currentTimeInMiliSec);
    this.setState({ currentTime: t});


    this.progress();
  }

  progress = () => {
    let duration = this.props.trackDuration;
    let currentTimeInMiliSec = this.state.currentTimeInMiliSec;
    let pct = (currentTimeInMiliSec/duration)*100;
    this.props.progress(pct) 
  }

  togglePlay = (mode) => {

  	this.state.isPlaying = (mode === 'play') ? true : false;

    this.setState({ isPlaying: ( mode === 'play') ? true : false });
   
    // play / pause audio stream
    if( this.state.isPlaying ) {
      
      this.intervalTimer('play');
      this.refs.audio_tag.play()

    } else {
      
      this.intervalTimer('pause');
      this.refs.audio_tag.pause();
    
    }
    
  }

  render () {

    const {
      trackUri,
      client_id,
      trackTitle,
      trackDuration
    } = this.props

    let soundfile = trackUri +'/stream?client_id='+client_id;

    return (
    	<div className={"Audio Audio--"+(this.state.isPlaying ? "playing" : "paused")}>
		      <audio ref={'audio_tag'} preload={"auto"} src={soundfile} />

          <div className="Audio-container">
            
            <div className="Audio-controls">
              <div className="Audio-play"><button onClick={() => {this.togglePlay('play')}} > Play </button></div>
              <div className="Audio-pause"><button onClick={() => {this.togglePlay('pause')}}> Pause </button></div>
            </div>

            <div className="Audio-title">{trackTitle}</div>

            <div className="Audio-time">{this.state.currentTime} / {this.state.duration}</div>

          </div>

      	</div>
    
    )
  }
}

export default AudioStream
