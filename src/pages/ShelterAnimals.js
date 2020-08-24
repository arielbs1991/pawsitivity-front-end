import React, { Component } from "react";
import { Layout } from 'antd';
import './Swipe.css'
import animalAPI from "../utils/animalAPI";
import ShelterHeaderComp from "../components/ShelterSide/ShelterHeader";
import ShelterAnimalCard from "../components/ShelterSide/ShelterAnimalCard";

const { Content } = Layout;

class ShelterAnimals extends Component {

    state = {
        animalsResult: [],
    }

    componentDidMount() {
        this.gatherShelterAnimals()
    }

    gatherShelterAnimals = async () => {
        let results = await animalAPI.findAllShelterAnimals()
        this.setState({ animalsResult: results.data })
    }

    handleFormUpdateButtonClick = async (e) => {
        const id = e.target.id
    }

    renderShelterAnimals = () => {
        return this.state.animalsResult.map(animal =>
            <ShelterAnimalCard
                key={animal.id}
                id={animal.id}
                type={animal.type}
                location={animal.location}
                imageSrc={animal.imageSrc}
                name={animal.name}
                breed={animal.breed}
                secondaryBreed={animal.secondaryBreed}
                age={animal.age}
                sex={animal.sex}
                size={animal.size}
                bio={animal.bio}
                likesCats={animal.likesCats}
                likesDogs={animal.city}
                likesKids={animal.likesKids}
            />)
    }

    render() {
        return (
            <Layout>
                <ShelterHeaderComp />
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