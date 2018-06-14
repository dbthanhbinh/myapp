import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'

class TabContent extends Component {
    render() {
        const Content = this.props.content || ''
        const CommentList = this.props.commentList || ''

        const panes = [
            {
                menuItem: { key: 'content', icon: 'list', content: 'Content' },
                render: () => <Tab.Pane>{Content}</Tab.Pane>,
            },
            // {
            //     menuItem: <Menu.Item key='comments'>Comments<Label>15</Label></Menu.Item>,
            //     render: () => <Tab.Pane>{CommentList}</Tab.Pane>,
            // },
            // {
            //     menuItem: { key: 'rating', icon: 'star', content: 'Rating' },
            //     render: () => <Tab.Pane>Tab 2 Rating</Tab.Pane>,
            // }
        ]


        return (<Tab content={this.props.content} panes={panes}/>)
    }
}

export default TabContent