import React from 'react'
import { Grid, Card, Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

import ItemCard from './item'

const CardList = () => (
  <Card.Group itemsPerRow={3}>
    {[...Array(6)].map((x, i) =>
        <ItemCard key={i} />
    )}      
  </Card.Group>
)

export default CardList