import React, {Component} from 'react'
import { Card, Rating, Image as ImageComponent} from 'semantic-ui-react'
import Boxprice from './boxprice'

class CardItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            CardItem: {}
        }
    }

    componentWillMount() {
        this.setState({CardItem: this.props.CardItem})
    }

    renderCard () {
        let CardItem = this.state.CardItem
        // Map data
        let dataItem = {
            name: CardItem.title ? CardItem.title : '',
            url: '/detail/' + CardItem.id,
            image: '',
            price: CardItem.price,
            discount: CardItem.discount,
            description: CardItem.excerpt
        }

        return (
            <Card color='red'>
                <a href="">
                    <ImageComponent src={dataItem.image} />
                </a>
                <Card.Content>
                    <Card.Header><a href={dataItem.url}>{dataItem.name}</a></Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Rating icon='star' pointing='right' defaultRating={3} maxRating={5} />
                    <Card.Description>{dataItem.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Boxprice price={dataItem.price} discount={dataItem.discount}/>
                </Card.Content>
            </Card>
        )
    }

    render () {
        return this.renderCard()
    }
}
  
export default CardItem