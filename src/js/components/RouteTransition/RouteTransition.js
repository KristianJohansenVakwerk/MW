import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const config = { stiffness: 70, damping: 40}

const willEnter = () => ({
  opacity: 0,
  x: spring(100, config)
});

const willLeave = () => ({
  opacity: spring(0, config),
  x: spring(100, config)
});

const getStyles = () => ({
  opacity: spring(1, config),
  x: spring(0, config)
});


const RouteTransition = ({ children: child, pathname }) => {
  
  return (

    <TransitionMotion
      styles={ [{
        key: pathname,
        style: getStyles(),
        data: { child }
      }] }
      willEnter={ willEnter }
      willLeave={ willLeave }
    >
      { (interpolated) =>
        <div className={"Site-transition"}>
          
          { interpolated.map(({ key, style, data }) => {
            
            return(

              <div
              key={ `${key}-transition` }
              style={ {
                ...styles.wrapper,
                opacity: `${style.opacity}`,
                transform: 'translate3d(' + `${style.x}` + '%, 0, 0)'
              } }
              >

                { data.child }

              </div>

              );
           }
            
          ) }

        </div>
      }
    </TransitionMotion>
  );
};

var styles = {
  wrapper: {
    position: 'absolute',
    width: '100%'
  }
};

export default RouteTransition;