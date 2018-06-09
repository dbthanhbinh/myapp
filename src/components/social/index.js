import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class SocialButton extends Component {
    constructor (props) {
        super (props)
        this.state = {
            socialList: []
        }
    }

    componentWillMount () {
        this.setState({
            socialList: this.props.socialList
        })
    }

    render() {
        let socialList = this.state.socialList
        return (
            <div className="social-button-list">
                {
                    (socialList) ? socialList.map((item, i) => {
                        return <Button circular color='facebook' icon='facebook' />
                    }) : ''
                }
            </div>
        )
    }
}

export default SocialButton