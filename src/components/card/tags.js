import React, { Component } from 'react'
import { Icon, Item, Label } from 'semantic-ui-react'

class Tags extends Component {
    constructor (props) {
        super (props)
        this.state = {
            tagsList: []
        }
    }

    componentWillMount () {
        this.setState({
            tagsList: this.props.tagsList
        })
    }

    render() {
        let tagsList = this.state.tagsList
        return (
            <Item.Group divided>
                <Item.Extra>
                    <Icon as="i" size="large" name="tags"/>
                    {
                        tagsList ? tagsList.map((item, i) => {
                            return <Label key={i} as = "a" href={item.url}>{item.name}</Label>
                        }) : ''
                    }
                </Item.Extra>
            </Item.Group>
            );
    }
}

export default Tags;