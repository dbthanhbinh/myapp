import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import CardItem from './item'

class Related extends Component {    
    render() {
        let relatedList = this.props.relatedList
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