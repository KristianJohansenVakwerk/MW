import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

import { 
  Route
} from 'react-router-dom';


const fadeRoute = ({ component: Component, ...rest }) => {
  
  const animationPresets = { out: { stiffness: 300, damping: 44 }, in: { stiffness: 300, damping: 44 } };

  

  return (
    <Route {...rest} children={({ location, match }) => (

      <TransitionMotion
        willEnter={() => {return {opacity: 0, translateX: 24}}}
        willLeave={() => {return {opacity: spring(0, animationPresets.out), translateX: spring(24)}}}
        defaultStyles={[ {
          key: location.pathname,
          style: { opacity: 0, translateX: 24},
          data: match
        } ]}
        styles={match ? [ {
          key: location.pathname,
          style: { opacity: spring(1, animationPresets.in), translateX: spring(0) },
          data: match
        } ] : []}
      >
        {interpolatedStyles => (
          <div className="route">
            {interpolatedStyles.map(config => (
              <div
              	className="page"
                key={config.key}
                style={{opacity: `${config.style.opacity}`, transform: `translateX(-${config.style.translateX}px)`}}
              >
                <Component />
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )}/>
  )
}

export default fadeRoute;