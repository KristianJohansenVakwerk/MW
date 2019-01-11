import React, {Component} from 'react'

import { 
  NavLink
} from 'react-router-dom';

class SubProjects extends Component {
  activeId = 0;

  constructor(props) {

  	super(props);

  	this.state = { activeId: 0 }

  	this._onClick = this._onClick.bind(this);

  }

  componentDidMount() {
  
  	// let filteredItem = this.props.items.filter( el => { return "/"+el.uri+"/" === this.props.curUri });
  	// if(!filteredItem.length || filteredItem === undefined ) return null;

  	// this.activeId = filteredItem[0].parentId;
  
  	// this.props.activeParent(this.activeId);

  }

  _onClick = () => {
  	this.props.activeParent(this.activeId);
  }

  render () {

    const {
      items,
      curUri
    } = this.props

    let curPage = items.filter( el => { return "/"+el.uri+"/" === curUri });

    if( !curPage.length || curPage == undefined ) return null;

    let curId = curPage[0].id;
    let curPageParentId = curPage[0].parentId;
    let filterId = (curPageParentId === 0 ) ? curId : curPageParentId;

    let subItems = items.filter( el => { return el.parentId === filterId });

    
    let activeItem = items.filter( el => { return '/'+el.uri+'/' === curUri })
    let subNavTitle;

    if(activeItem.length) {
      subNavTitle = activeItem[0].subNavTitle;  
    }
    

    if(subItems.length) this.activeId = subItems[0].parentId;


    let curItems = subItems.map(( subProject, ix ) => { 
    	              
	      return( 

	         <li className="List-item" key={ix}>
	          <NavLink 
	            to={'/'+subProject.uri+'/'} 
	            onClick={this._onClick}
	          >
	          {subProject.title}
	          </NavLink>
	        </li>

	      );

	  }) 

    return(
    	<ul className="List  List--subProjects">
        { activeItem.length && <li className="List-item  List-item--subNavTitle">{subNavTitle}</li> }
    		{ curItems }
    	</ul>
    );

  }
}

export default SubProjects
