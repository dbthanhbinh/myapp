import React, {Component} from 'react'
import { Card, Rating, Button, Icon, Image as ImageComponent, Label } from 'semantic-ui-react'
import Boxprice from './boxprice'

class CartItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            CartItem: {}
        }
    }

    componentWillMount() {
        this.setState({CartItem: this.props.CartItem})
    }

    renderCart (CartItem) {
        return (
            <Card color='red'>
                <a href="">
                    <ImageComponent src={CartItem.image} />
                </a>
                <Card.Content>
                    <Card.Header><a href="/detail">{CartItem.name}</a></Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Rating icon='star' pointing='right' defaultRating={3} maxRating={5} />
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Boxprice price={CartItem.price} discount={CartItem.discount}/>
                </Card.Content>
            </Card>
        )
    }

    render () {
        let CartItem = this.state.CartItem
        return this.renderCart(CartItem)
    }
}
  
export default CartItem