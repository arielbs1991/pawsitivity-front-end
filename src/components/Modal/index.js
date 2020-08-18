import React from 'react'
import { Modal, Button } from 'antd';
import { InfoOutlined } from '@ant-design/icons';
import petAPI from "../../utils/petAPI"
class ModalComp extends React.Component {
  state = { visible: false };
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
        <Button onClick={this.showModal} align="center" shape="circle" icon={<InfoOutlined />}></Button>
        <Modal
          title={this.props.dog.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Age: {this.props.dog.age}</p>
          <p>Breed: {this.props.dog.breeds.primary} {this.props.dog.breeds.secondary}</p>
          <p>Bio: {this.props.dog.description} </p>
          {/* <p>Good with Kids: {this.props.dog.environment.children} </p>
          <p>Good with Cats: {this.props.dog.environment.cats}  </p>
          <p>Good with Dogs: {this.props.dog.environment.dogs} </p> */}
        </Modal>
      </>
    );
  }
}
export default ModalComp;