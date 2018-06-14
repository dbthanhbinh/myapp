import React, { Component } from 'react'
import { Item, Label } from 'semantic-ui-react'

class Colors extends Component {
    render() {
        let colorList = this.props.colorList
        return (
            ( colorList && colorList.length > 0 )
                ? <Item.Extra>
                    {
                        colorList ? colorList.map((item, i) => {
                            return <Label key={i} >{item.title}</Label>
                        }) : ''
                    }
                </Item.Extra> : ''
        );
    }
}

export default Colors;