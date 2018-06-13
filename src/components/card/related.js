import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import CardItem from './item'

class Related extends Component {
    constructor (props) {
        super (props)
        this.state = {
            relatedList: []
        }
    }

    componentWillMount () {
        this.setState({
            relatedList: this.props.relatedList
        })
    }

    render() {
        let relatedList = this.state.relatedList
        console.log('==relatedList', relatedList)
        return (
            <Card.Group itemsPerRow={3}>
                {
                    relatedList ? relatedList.map((element, i) =>
                        <CardItem key={i}
                                  CartItem={element}
                        />
                    ) : ''
                }
            </Card.Group>
        )
    }
}

export default Related;