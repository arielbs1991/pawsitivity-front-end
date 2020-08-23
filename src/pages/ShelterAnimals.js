import React, { Component, useState } from "react";
import { Layout } from 'antd';
import './Swipe.css'
// import ShelterAnimalsComp from "../components/ShelterAnimals";
import animalAPI from "../utils/animalAPI";
import HeaderComp from "../components/Header";
import ShelterAnimalCard from "../components/ShelterAnimalCard";

const { Content } = Layout;

class ShelterAnimals extends Component {

    state = {
        animalsResult: []
    }

    componentDidMount() {
        this.gatherShelterAnimals()
    }

    gatherShelterAnimals = async () => {
        await animalAPI.findAllShelterAnimals()
            .then(res => {
                this.setState({ results: res.data.data });
                console.log(results);
            })
            .catch(err => {
                console.log(err);
            })
    }

   

    renderShelterAnimals = () => {
        return this.state.results.map(animal =>
            <ShelterAnimalCard
                key={animal.id}
                id={animal.id}
                type={animal.type}
                imageSrc={animal.imageSrc}
                name={animal.name}
                breed={animal.breeds.primary}
                breedTwo={animal.breeds.secondary}
                age={animal.age}
                sex={animal.sex}
                size={animal.size}
                bio={animal.bio}
                likesCats={animal.likesCats}
                likesDogs={animal.city}
                likesKids={animal.likesKids}
                postcode={animal.postcode}
            />)
    }

    render() {
        return (
            <Layout>
                <HeaderComp />
                <Content >
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div className="matchMe"
                        >{this.renderShelterAnimals()}
                        </div>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default ShelterAnimals;