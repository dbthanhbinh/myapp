import React, { Component } from 'react';
import { Grid, Card, Rating, Button, Reveal, Icon, Image, Item, Label } from 'semantic-ui-react'
import TabContent from './content'
import Related from './related'
import Tags from './tags'

const paragraph = <Image src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

class CardDetail extends Component {
    render() {
    return (
        <div>
            <Item.Group divided>
                <Item>
                    {/* <Item.Image size='big' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />         */}
                    <Reveal animated='move up' className="ui large image">
                        <Reveal.Content visible>
                        <Image src='https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg' size='large' />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                        <Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' size='large' />
                        </Reveal.Content>
                    </Reveal>
                    <Item.Content>
                        <Item.Header as='h1'>12 Years a Slave</Item.Header>
                        <Item.Meta>
                        <span className='cinema'>Union Square 14</span>
                        </Item.Meta>
                        <Rating icon='star' pointing='right' defaultRating={3} maxRating={5} /> 
                        <Item.Group divided>
                            <Button as='div' labelPosition='right'>
                                <Button color='red'>
                                    <Icon name='shop' />
                                    Price
                                </Button>
                                <Label as='a' basic color='red' pointing='left'>$ 2,048</Label>
                            </Button>                                                
                        </Item.Group>                   
                        <Item.Description>{paragraph}</Item.Description>
                        
                        <Item.Group divided>                            
                            <Button.Group>
                                <Button>Buy</Button>
                                <Button.Or />
                                <Button positive as="a" href="tel:01668483699">Call: 0166 8483 699</Button>
                            </Button.Group>                    
                        </Item.Group>

                        <div>
                            <Button circular color='facebook' icon='facebook' />
                            <Button circular color='twitter' icon='twitter' />
                            <Button circular color='linkedin' icon='linkedin' />
                            <Button circular color='google plus' icon='google plus' />
                        </div>

                    </Item.Content>
                </Item>        
            </Item.Group>

            <Item.Group divided>
                <TabContent />
            </Item.Group>

            <Tags />

            <Related />
        </div>
        );
    }
}

export default CardDetail;