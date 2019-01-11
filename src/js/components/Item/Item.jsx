import React, {Component} from 'react'

import { LazyImage, Content } from "../../components";

import { 
  NavLink
} from 'react-router-dom';

class Item extends Component {

  constructor(props) {

    super(props);

    this.state = {}
  }

  componentDidMount() {}

  render () {

    const {
      title,
      mod,
      item,
      intro,
      image,
      link,
      tag,
      ratio,
    } = this.props

    if(item) {

      return (
      <div className={"Item  Item--"+mod}>
        
        
        <div className={"Item-media"}>
            <LazyImage src={item.image.sizes.mancoba_small} ratio={ratio} />
        </div>

        <div className="Item-head">
          <div className="Item-title"><h3>{title}</h3></div>
        </div>
        
        <div className="Item-body">

          <div className="Item-text">
            <Content modifier={mod} html={"<p>"+item.summary+"</p>"} />

          </div>

        </div>


        <div className="Item-foot">
          {link && <NavLink to={link} className={"Link"}>Link</NavLink>}
        </div>

      </div>
    )

    } else {
      return null;
    }
    
  }
}

export default Item
