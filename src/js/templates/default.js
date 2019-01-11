import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import * as ACTIONS from '../actions/Page'
import { TweenLite, Power4 } from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { 
  NavLink,
  withRouter,
  Route
} from 'react-router-dom';

import { Blocks, Grid, Content, Sound, Slideshow, Title} from '../components';

const mapStateToProps = state => ({
  page: state.page.data,
  loading: state.page.loading,
  loaded: state.page.loaded
})

const mapDispatchToProps = (dispatch) => {
  
  return{
    fetchPage: bindActionCreators(ACTIONS.getPage, dispatch),
  }
  
}

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = { fullText: false, readMore: false, mode: "image" }

    this._onCLick = this._onCLick.bind(this);

    

  }
 
 componentDidMount() {
    
    let slug = this.props.entry.url;
    this.props.fetchPage(slug);

 }

 componentWillMount() {}

 _onCLick = (mode) => {
    let m;
    if(mode == 'image') {
      m = 'image';
    } else {
      m =  'text'
    }
    
    this.setState({ mode: m });

 }


render () {

  let { page,loading, loaded } = this.props;
    
  if( loading ) return null;


  console.log('page.acf.sound_track_id',page.acf.sound_track_id);
  
   return (

      <div className={"Template  Template--page  Template--"+this.state.mode}>
        
        <Helmet>
          <title> Mette Woller – {page.title.rendered }</title>
        </Helmet>

        <div className={"Template-head"}>
          
          <div className="Template-sections">
          
            <div className="Template-section  Template-section--title">

              <Title page={page} /> 
              
            </div>

            <div className="Template-section  Template-section--select">
              <button onClick={() => { this._onCLick('image') }} >IMAGE</button> / <button onClick={() => { this._onCLick('text') }}>TEXT</button>
            </div>

            <div className="Template-section  Template-section--summary">
              { page.acf.slideshow && <Content html={page.acf.text.full_text} /> }
            </div>

          </div>

        </div>

        <div className="Template-gallery">
          <div className="Template-gallery-container">
           { page.acf.slideshow && <Slideshow className={"Slider--fluid"} slides={page.acf.slideshow} /> }
         </div>
        
        </div>

        <div className={"Template-text  Template-text--"+(this.state.fullText ? "show" : "hide")} ref={"text"}>
          { page.acf.slideshow && <Content html={page.acf.text.full_text} /> }
        </div>

        <div className="Template-sound">
           { loaded && <Sound trackId={page.acf.sound_track_id} /> }
        </div>

      </div>  

    );


  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
