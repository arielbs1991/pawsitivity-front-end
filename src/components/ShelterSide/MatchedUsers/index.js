import React, { Component, useState } from "react";
import { Layout } from 'antd';
import './Swipe.css'
// import UserMatchesComp from "../components/UserMatches";
import matchAPI from "../utils/matchAPI";
import HeaderComp from "../components/Header";
import ShelterAnimalCard from "../components/ShelterAnimalCard";

const { Content } = Layout;

class UserMatches extends Component {

    state = {
        animalsResult: []
    }

    componentDidMount() {
        this.gatherUserMatches()
    }

    gatherUserMatches = async () => {
        await matchAPI.getMatchesForUniquePet()
            .then(res => {
                this.setState({ results: res.data.data });
                console.log(results);
            })
            .catch(err => {
                console.log(err);
            })
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
                <HeaderComp />
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