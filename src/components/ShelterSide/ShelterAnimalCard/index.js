import React, { Component } from "react";
import { Modal } from 'antd';
import AnimalUpdateForm from '../AnimalUpdateForm'
require('./style.css');


export default class ShelterAnimalCard extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <div className="animalCard">
                <img src={this.props.imageSrc} />
                <h1 align="center">{this.props.name}</h1>
                <p align="center"><strong>ID:</strong> {this.props.id}</p>
                <p align="center"><strong>Breed(s):</strong> {this.props.breed}, {this.props.secondaryBreed}</p>
                <p align="center"><strong>Age:</strong> {this.props.age}</p>
                <p align="center"><strong>Gender:</strong> {this.props.sex}</p>
                <p align="center"><strong>Size:</strong> {this.props.size}</p>
                <p align="center"><strong>Bio:</strong> {this.props.bio}</p>
                <div className="pupCardOptions">

                    {/* <Button onClick={this.handleButtonClick} type="primary">View Matches</Button> */}
                </div>
                <button className="update" onClick={this.showModal} id={this.props.id}>
                    <strong>Update Animal</strong>
                </button>
                <Modal className="animalUpdateModalContainer"
                    title={"Update Animal"}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <AnimalUpdateForm
                        id={this.props.id}
                        name={this.props.name}
                        type={this.props.type}
                        location={this.props.location}
                        imageSrc={this.props.imageSrc}
                        breed={this.props.breed}
                        secondaryBreed={this.props.secondaryBreed}
                        age={this.props.age}
                        sex={this.props.sex}
                        size={this.props.size}
                        bio={this.props.bio}
                        likesKids={this.props.likesKids}
                        likesCats={this.props.likesCats}
                        likesDogs={this.props.likesDogs}
                    />
                </Modal>
            </div>)
    }
}