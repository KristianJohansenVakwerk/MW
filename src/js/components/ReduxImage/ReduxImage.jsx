import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../../actions/Image';

import * as Media from '../../utils/Breakpoints';

const mapStateToProps = state => ({
  image: state.image.data,
  loading: state.image.loading,
  loaded: state.image.loaded
})

const mapDispatchToProps = (dispatch) => {
  return{
    fetchImage: bindActionCreators(ACTIONS.getImage, dispatch),
  }
}


class Image extends Component {

	constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillMount() {
    
    this.props.fetchImage(this.props.id);
  }

	componentWillUnmount() {}

  render() {

  const { image, loading, loaded} = this.props;



  if(loading) return null;


  const ratioStyle = {
      paddingTop:(100 / (image.media_details.width/image.media_details.height))+'%'
  }

  const fluidStyle = {

      width:'100%',
      height:'100%',
      position:'absolute',
      top:0,
      left:0

    }

    const style = (this.props.fluid) ? fluidStyle : ratioStyle;

    let className = this.props.className || '';

    if(this.props.fluid) className += " Image--fluid";

    let size = "large";
    const src = image.media_details.sizes.teds_large.source_url;
  
    return (
      <div className={'Image '+className} ref="image" style={style} data-width={image.media_details.width}>

           <div className="Image-media" style={{backgroundImage:"url("+src+")"}} title={this.props.title} />
       
      </div>
    );


  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Image);
