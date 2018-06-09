import React from 'react'
import { Grid, Card, Rating, Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

const paragraph = <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />

const ItemCard = () => (
    <Card color='red'>
      <a href="">  
        <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
      </a>
      <Card.Content>
        <Card.Header><a href="/detail">{this.props.CartItem}</a></Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Rating icon='star' pointing='right' defaultRating={3} maxRating={5} />
        <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>        
        <div>
            <Button as='div' labelPosition='right'>
                <Button color='red'>
                    <Icon name='shop' />
                    Buy
                </Button>
                <Label as='a' basic color='red' pointing='left'>$ 2,048</Label>
            </Button>                      
        </div>
      </Card.Content>
    </Card>
  )
  
  export default ItemCard