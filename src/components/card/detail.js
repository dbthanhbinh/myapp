import React, { Component } from 'react';
import { Rating, Button, Reveal, Image, Item } from 'semantic-ui-react'
import TabContent from './content'
import Related from './related'
import Tags from './tags'
import CardService from './card.service'
import SocialButton from '../social/index'
import './card.css'
import Boxprice from './boxprice'

const paragraph = <Image src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

class CardDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            detailCard: {}
        }
    }

    // componentWillRecieveProps --> shouldComponentUpdate-->componentWillUpdate
    // -->render-->componentDidUpdate
    componentWillMount () {
        let id = this.props.match.params.id
        CardService.detail(id, (results) => {
            this.setState({detailCard: results.data})
        })
    }

    render() {
        let detailCard = this.state.detailCard

        // Map data
        let dataItem = {
            name: detailCard.title ? detailCard.title : '',
            image: '',
            price: detailCard.price,
            discount: detailCard.discount,
            description: detailCard.excerpt,
            relatedList: detailCard.relatedList
        }
        console.log('=====fff', detailCard.relatedList)
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
                            <Item.Header as='h1'>{dataItem.name}</Item.Header>
                            <Item.Meta>
                            <span className='cinema'>Union Square 14</span>
                            </Item.Meta>
                            <Rating icon='star' pointing='right' defaultRating={3} maxRating={5} />

                            <Item.Description>{paragraph}</Item.Description>
                            <Boxprice price={dataItem.price} discount={dataItem.discount} />
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
                <Tags tagsList={dataItem.tagsList}/>
                <Related  relatedList={detailCard.relatedList}/>
            </div>
            );
    }
}

export default CardDetail;