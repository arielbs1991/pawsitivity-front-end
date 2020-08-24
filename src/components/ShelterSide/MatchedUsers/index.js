import React, { Component } from "react";
import { Layout } from 'antd';
import './Swipe.css'
import matchAPI from "../../utils/matchAPI";
import ShelterHeaderComp from "../../components/ShelterSide/ShelterHeader";

const { Content } = Layout;

class UserMatches extends Component {

    state = {
        usersResult: []
    }

    componentDidMount() {
        this.gatherUserMatches()
    }

    gatherUserMatches = async (id) => {
        let results = await matchAPI.getMatchesForUniquePet(id)
        this.setState({ usersResult: results.data })
    }

    renderUserMatches = () => {
        return this.state.results.map(user =>
            <UserCard
                key={user.id}
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                city={user.city}
                state={user.state}
                postcode={user.postcode}
                phoneNumber={user.phoneNumber}
                hasKids={user.hasKids}
                hasCats={user.hasCats}
                hasDogs={user.hasDogs}
                whichSpecies={user.whichSpecies}

            />)
    }

    render() {
        return (
            <Layout>
                <ShelterHeaderComp />
                <Content >
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div className="matchMe"
                        >{this.renderUserMatches()}
                        </div>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default UserMatches;