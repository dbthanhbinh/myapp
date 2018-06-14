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
            <div className="ui large top hidden menu">
                <div className="ui container">
                    <div className="left menu">
                        Lavadep.com
                    </div>
                    <a className="active item">Home</a>
                    <a className="item">Work</a>
                    <a className="item">Company</a>
                    <a className="item">Careers</a>
                </div>
            </div>
            <Container>
            { this.props.children }
            </Container>
            <Footer />           
        </div> 
        );
    }
}

export default Layout;