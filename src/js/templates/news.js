import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../actions/News';

import { 
  NavLink,
  withRouter
} from 'react-router-dom';

import { Blocks, Grid, Item} from '../components';

const mapStateToProps = state => ({
  newsStories: state.news.data,
  loading: state.news.loading
})

const mapDispatchToProps = (dispatch) => {
  return{
    fetchNews: bindActionCreators(ACTIONS.getNews, dispatch),
  }
  
}

class Page extends Component {

  constructor(props) {
    super(props);

    this.state = {}

  }
 
  componentDidMount() {
    
    this.props.fetchNews('news'); 
  }

  
  componentWillMount() {}

  
  render () {
   


  let { newsStories,loading } = this.props;
  if(loading) return null;
  
  return(
  
      <div className={"Template  Template--news"}>


        <Helmet>
          <title> Mancoba – News</title>
        </Helmet>

        <div className="Template-head">
          <h1 className="Template-title">News</h1>
        </div>

        <div className="Template-grid">

          <Grid mod={"3"}>
            { newsStories.map((n, ix) => {

              let title = n.title.rendered;
              console.log("TITLE", title);
              return(
                <div className="Grid-item" key={ix} >
                  <Item mod={'news'} title={title} item={n.acf.news_content} ratio={187/152} />
                </div>
              );


            })}
          </Grid>

        </div>
        

      </div>  

    );
    
    

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
 