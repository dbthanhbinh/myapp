import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/layout/master'
import Home from './components/home/index'
import CardDetail from './components/card/detail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
              <Route exact path="/" component={Home} />    
              <Route exact path="/detail" component={CardDetail} />            
          </Layout>
      </BrowserRouter> 
    );
  }
}

export default App;
