import React, { Component } from 'react'
import { Icon, Item, Label } from 'semantic-ui-react'

class Tags extends Component {
    render() {
        let tagsList = this.props.tagsList
        console.log('==tagsList', tagsList)
        return (
            <Item.Group divided>
                <Item.Extra>
                    <Icon as="i" size="large" name="tags"/>
                    {
                        tagsList ? tagsList.map((item, i) => {
                            return <Label key={i} as = "a" href={(item.url) ? item.url : '#'}>{item.title}</Label>
                        }) : ''
                    }
                </Item.Extra>
            </Item.Group>
        );
    }
}

export default Tags;