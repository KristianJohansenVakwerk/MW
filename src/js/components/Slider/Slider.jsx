import React, {Component} from 'react'

import SwipeableViews from 'react-swipeable-views';
import Image from '../Image';


class Slider extends Component {

  cur = 0;
  transitioned = 0;
  children = [];
  timer = 0;

  constructor(props){

      super(props);
      this.state = {index:0,total:0,transitioned:0};
  }

  componentDidMount = () => {

      this.children = React.Children.toArray(this.props.children);

      if(this.props.autoplay){
          this.autoPlay();
          

      }

  }

  componentDidUpdate = (nextProps) => {
      
      if(nextProps.autoplay){
          this.autoPlay();

      }

  }
  autoPlay = () => {

      this.stopAutoPlay();

      let interval = this.props.delay || this.props.interval || 2000;
      
      this.timer = setInterval(this.next,interval);


  }

  stopAutoPlay = () => {

      if(this.timer) clearInterval(this.timer);

  }

  next = () => {

      let cur = this.state.index;
      let next = cur + 1;

      if(next >= (this.children.length)){

          next = 0;

      }

      this.goTo(next);

  }

  componentWillMount = () => {

      const _this = this;
      this.children = React.Children.toArray(this.props.children);



  }

  componentWillUnmount = () => {

      this.stopAutoPlay();

  }

  handleChange = (index) => {

      this.setState({index:index});
      if(this.props.onChange) this.props.onChange(index);
  }

  transitionEnd = () => {

      this.setState({transitioned:this.cur});

  }

  goTo = (ix) => {

      this.handleChange(ix);

  }

  click = (ix) => {

      this.stopAutoPlay();
      this.goTo(ix);

  }

  render() {

    let cur = this.state.index;

    this.cur = cur;

    let next = cur + 1;
    let prev = cur - 1;


    const prevButton = (prev >= 0) ? (<div className="Slider-prev" onClick={() => this.click(prev)} children={(this.props.prev)?this.props.prev:null}/>) : <div className="Slider-prev" onClick={() => this.click(this.children.length - 1)} children={(this.props.prev)?this.props.prev:null}/>;
    const nextButton = (next <= (this.children.length - 1)) ? (<div className="Slider-next" onClick={() => this.click(next)} children={(this.props.next)?this.props.next:null} />) : <div className="Slider-next" onClick={() => this.click(0)} children={(this.props.next)?this.props.next:null} />;
    
    let className = this.props.className || '';
    

    return (

        <div className={"Slider "+className}>

          
            <SwipeableViews className="Slider-body" onChangeIndex={this.handleChange} springConfig={{duration: '0.8s', easeFunction: 'cubic-bezier(0.25,0.1,0.25,1)', delay: '0s'}} enableMouseEvents={true} hysteresis={0.2} index={cur}>
              {this.props.children}
            </SwipeableViews>
   

          <ul className="Slider-controls">
            {prevButton}
            {nextButton}
          </ul>

          <div className="Slider-foot">
              {this.children.map((item,ix) => 
                {
                  let isActive = (ix == cur) ? 'is-active' : '';
                  
                  return (<div key={ix} className={"Slider-button "+isActive} onClick={() => this.goTo(ix)} />)
                  
                }

              )}
              
          </div>



        </div>
          
    );
  }
}




export default Slider;
