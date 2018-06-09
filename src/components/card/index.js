import React from 'react'
import { Card } from 'semantic-ui-react'
import CartService from './cart.service'
import CardItem from './item'
const CardList = () => (
  <Card.Group itemsPerRow={3}>
    {CartService.listCart.map((element, i) =>
        <CardItem key={i}
                  CartItem={element}
        />
    )}
  </Card.Group>
)

export default CardList