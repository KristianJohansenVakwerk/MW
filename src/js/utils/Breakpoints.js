import React from 'react';
import Responsive from 'react-responsive';

export const Wide = props => <Responsive {...props} minWidth={1300} />;
export const Desktop = props => <Responsive {...props} minWidth={850} maxWidth={1299} />;
export const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={849} />;
export const Default = props => <Responsive {...props} query={'(min-width: 746px)'} />;
export const Mobile = props => <Responsive {...props} query={'(max-width: 745px)'} />;