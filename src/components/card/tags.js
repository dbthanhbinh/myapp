import React, { Component } from 'react';
import { Grid, Card, Rating, Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

import CardList from '../card'

class Tags extends Component {
    render() {
    return (
        <Item.Group divided>             
            <Item.Extra>
                <Icon as="i" size="large" name="tags"/>
                <Label as = "a">IMAX</Label>
                <Label as = "a">IMAX</Label>
                <Label as = "a">IMAX</Label>
                <Label as = "a">IMAX</Label>
                <Label as = "a">IMAX</Label>
                <Label as = "a">IMAX</Label>
                <Label as = "a" icon='globe' content='Additional Languages' />
            </Item.Extra>
        </Item.Group>    
        );
    }
}

export default Tags;