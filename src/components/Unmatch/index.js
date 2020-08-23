import React, { Component } from 'react';
import { Button } from 'antd'
// import matchAPI from '../../utils/matchAPI';
import userAPI from '../../utils/userAPI';

class UnmatchComp extends Component {
    state= {
        userId:"",
        petId:"",
        isLiked:true
    }

    // finduserapi
    // res.data.matches[0].id
    // body paramater is liked =false

    Unmatch = async (event) => {
        let results = await userAPI.getCurrentUserInfo();
        results = await userAPI.findUser(results.data.userId)
        console.log(results.data.userData.Matches)
        // event.preventDefault();
        // matchAPI.updateMatch(res.data.userId, res.data.isLiked).then(res => {
        //     console.log(res.data)
        //     this.setState({
        //         isliked: false
        //     })
        // })
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