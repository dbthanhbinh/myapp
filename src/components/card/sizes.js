import React, { Component } from 'react'
import { Item, Label } from 'semantic-ui-react'

class Sizes extends Component {
    render() {
        let sizeList = this.props.sizeList
        return (
            (sizeList && sizeList.length > 0)
                ? <Item.Extra>
                    {
                        sizeList ? sizeList.map((item, i) => {
                            return <Label key={i} >{item.title}</Label>
                        }) : ''
                    }
                </Item.Extra> : ''
        );
    }
}

export default Sizes;