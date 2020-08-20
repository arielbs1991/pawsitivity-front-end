import React, { Component } from 'react';
import { Button } from 'antd'
import matchAPI from '../../utils/matchAPI';

class UnmatchComp extends Component {

    Unmatch = event => {
        event.preventDefault();
        matchAPI.updateMatch(res.data.id, res.data.isLiked).then(res => {
            console.log(res.data)
            this.setState({
                isliked: false
            })
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.Unmatch}>Unmatch</Button>
            </div>
        )

    }
}

export default UnmatchComp;