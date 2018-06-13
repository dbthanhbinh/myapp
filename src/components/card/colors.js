import React, { Component } from 'react'
import { Item, Label } from 'semantic-ui-react'

class Colors extends Component {
    render() {
        let colorList = this.props.colorList
        console.log('==colorList', colorList)
        return (
            <Item.Group divided>
                <Item.Extra>
                    {
                        colorList ? colorList.map((item, i) => {
                            return <Label key={i} >{item.title}</Label>
                        }) : ''
                    }
                </Item.Extra>
            </Item.Group>
        );
    }
}

export default Colors;