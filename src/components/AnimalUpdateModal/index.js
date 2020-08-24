import React from 'react'
import { Modal, Button } from 'antd';
import AnimalUpdateForm from '../AnimalUpdateForm'
import "./style.css"

class AnimalUpdateModal extends React.Component {
  state = { visible: false};
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
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
      <>
        <Button onClick={this.showModal} align="center" >Update Details</Button>
        <Modal className="animalUpdateModalContainer"
          title={"Update Animal"}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <AnimalUpdateForm 
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
      </>
    );
  }
}
export default AnimalUpdateModal;