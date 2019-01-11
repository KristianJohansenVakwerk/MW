import React, {Component} from 'react'

import { 
  NavLink
} from 'react-router-dom';

class SubNav extends Component {

  constructor(props) {

  	super(props);

  	this.state = {};

    this._onClick = this._onClick.bind(this);


  }

  componentDidMount() {}

  _onClick = () => {

      this.props.activeParent = 0;
      return null;

  }


  render () {

    const { items, curUri, activeId } = this.props;
    
    if( !items.length || items == undefined ) return null;
    
    let loopItems = items;

    if( activeId !== 0 ) {
      loopItems = loopItems.filter( el => { return el.id === activeId });
    }

  
    let subNav = loopItems.map(( item, ix) => { 

        if(item.parentId === 0) {        
          
          return( 

            <li key={ix} className={(item.id == activeId) ? "List-item  List-item--notClickable" : "List-item"}>
              <NavLink 
                to={'/'+item.uri+'/'} 
              >
              {item.title}
              </NavLink>
            </li>

          );

        }

    })



        return (
          <ul className="List  List--subNav"> 
            { subNav }
          </ul>
        )
  }
}

export default SubNav;