import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import CardService from './card.service'
import CardItem from './item'

class CardList extends Component{
  constructor (props) {
    super (props)
    this.state = {
      listItem: []
    }
  }

    componentDidMount () {
      CardService.listing ((results) => {
          this.setState({listItem: results.data})
      })
  }


  render () {
      let listCard = this.state.listItem
      return (
          <Card.Group itemsPerRow={3}>
              {
                  listCard.map((element, i) =>
                  <CardItem key={i}
                            CardItem={element}
                  />
              )}
          </Card.Group>
      )
  }
}

export default CardList