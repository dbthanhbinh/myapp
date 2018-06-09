import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { key: 'content', icon: 'list', content: 'Content' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },  
  {
    menuItem: <Menu.Item key='comments'>Comments<Label>15</Label></Menu.Item>,
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
  },
  {
    menuItem: { key: 'rating', icon: 'star', content: 'Rating' },
    render: () => <Tab.Pane>Tab 2 Rating</Tab.Pane>,
  }
]

const TabContent = () => (
  <Tab panes={panes} />
)

export default TabContent