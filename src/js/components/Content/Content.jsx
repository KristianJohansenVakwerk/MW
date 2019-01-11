import React from 'react'

const Content = ({html,modifier,children}) => {

	

  const mod = (modifier) ? 'Content--'+modifier : '';

  let props = {};
  let content = null;
  if(html) props.dangerouslySetInnerHTML = {__html:html};
  if(children && !html) content = children;

  return <div className={"Content "+mod} {...props}>{content}</div>

}

export default Content;
