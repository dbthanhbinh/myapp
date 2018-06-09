import React, {Component} from 'react'
import { Item, Button, Icon, Label } from 'semantic-ui-react'
import Utility from "../../core/Utility";

class BoxPrice extends Component {
    constructor (props) {
        super(props)
        this.state = {
            price: 0,
            discount: 0
        }
    }

    componentWillMount() {
        this.setState({
            price: this.props.price,
            discount: this.props.discount
        })
    }

    render () {
        let showPrice = ''
        let showAllPrice = false
        let price = this.state.price
        let discount = this.state.discount

        if (!Number.isInteger(price) || !Number.isInteger(discount)) {
            showPrice = <Label as='a' basic color='red' pointing='left'>{Utility.price('','')}</Label>
        } else if (price < 0 || discount < 0) {
            showPrice = <Label as='a' basic color='red' pointing='left'>{Utility.price('','')}</Label>
        }
        else if (price < discount) {
            showPrice = <Label as='a' basic color='red' pointing='left'>{Utility.price(price, discount)}</Label>
        } else {
            showAllPrice = true
        }

        return (
            <Item.Group divided>
                <Button as='div' labelPosition='right'>
                    <Button color='red'>
                        <Icon name='money' />
                    </Button>
                    {
                        showAllPrice ?
                            <div> <Label as='a' basic color='red' pointing='left'>{Utility.price(price, discount)}</Label>
                                <Label className="price-discount" as='a' basic color='red' pointing='left'>{Utility.formatPrice(price)}</Label> </div> : showPrice
                    }
                </Button>
            </Item.Group>
        )
    }
}

export default BoxPrice