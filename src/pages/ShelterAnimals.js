import React, { Component, useState } from "react";
import { Layout } from 'antd';
import './Swipe.css'
// import ShelterAnimalsComp from "../components/ShelterAnimals";
import animalAPI from "../utils/animalAPI";
import HeaderComp from "../components/Header";
import ShelterAnimalCard from "../components/ShelterSide/ShelterAnimalCard";
import AnimalUpdateModal from "../components/ShelterSide/AnimalUpdateModal";

const { Content } = Layout;

class ShelterAnimals extends Component {

    state = {
        animalsResult: [],
        // queryResult: []
    }

    componentDidMount() {
        this.gatherShelterAnimals()
    }

    gatherShelterAnimals = async () => {
        let results = await animalAPI.findAllShelterAnimals()
      this.setState({ animalsResult: results.data })
        
        // .then(res => {
        //     this.setState({ animalsResult: res.data.data });
        //     // console.log(animalsResult);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
}


    renderShelterAnimals = () => {
        return this.state.animalsResult.map(animal =>
            <ShelterAnimalCard
                key={animal.id}
                id={animal.id}
                type={animal.type}
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
                AnimalMatchId={animal.AnimalMatchId}
            />)
    }
    // handleUpdateButtonClick = e => {
    //     e.preventDefault();
    //     this.setState({ state: <AnimalUpdateModal id={id} /> })
    // }

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