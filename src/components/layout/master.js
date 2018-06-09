import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
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