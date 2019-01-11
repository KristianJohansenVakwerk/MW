import React, { Component } from 'react';


import { 
  BrowserRouter as Router
} from 'react-router-dom';

import Layout from './templates';
import { Site } from './components';


class App extends Component {


  render() {


    return (

      <Site>
      
      <Router>
          <Layout/>
      </Router>
      
      </Site>
    );
  }
}

export default App;
