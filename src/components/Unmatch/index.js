import React, { Component } from 'react';
import { Button } from 'antd'
import userAPI from '../../utils/userAPI';

class UnmatchComp extends Component {
    state= {
        userId:"",
        petId:"",
        isLiked:true
    }

    Unmatch = async (event) => {
        let results = await userAPI.getCurrentUserInfo();
        results = await userAPI.findUser(results.data.userId)
        console.log(results.data.userData.Matches)
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