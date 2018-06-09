import React, { Component } from 'react';
import {
    Container,
    Header
  } from 'semantic-ui-react'

import Footer from './footer';

class Layout extends Component {
    render() {
    return (
        <div className="App">
            <Header />
            <Container>
            { this.props.children }
            </Container>
            <Footer />           
        </div> 
        );
    }
}

export default Layout;