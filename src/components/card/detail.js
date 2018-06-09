import React, { Component } from 'react';
import { Rating, Button, Reveal, Icon, Image, Item, Label } from 'semantic-ui-react'
import TabContent from './content'
import Related from './related'
import Tags from './tags'
import CartService from './cart.service'
import SocialButton from '../social/index'
import './cart.css'
import Boxprice from './boxprice'

const paragraph = <Image src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

class CartDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            detailCart: {}
        }
    }

    componentWillMount () {
        this.setState({
            detailCart: CartService.detailCart
        })
    }

    render() {
        let detailCart = this.state.detailCart

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
                            <Item.Header as='h1'>{detailCart.name}</Item.Header>
                            <Item.Meta>
                            <span className='cinema'>Union Square 14</span>
                            </Item.Meta>
                            <Rating icon='star' pointing='right' defaultRating={3} maxRating={5} />

                            <Item.Description>{paragraph}</Item.Description>
                            <Boxprice price={detailCart.price} discount={detailCart.discount}/>
                            <Item.Group divided>
                                <Button.Group>
                                    <Button>Buy</Button>
                                    <Button.Or />
                                    <Button positive as="a" href="tel:01668483699">Call: 0166 8483 699</Button>
                                </Button.Group>
                            </Item.Group>
                            <SocialButton />
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Item.Group divided>
                    <TabContent />
                </Item.Group>
                <Tags tagsList={detailCart.tagsList}/>
                <Related  relatedList={detailCart.relatedList}/>
            </div>
            );
    }
}

export default CartDetail;