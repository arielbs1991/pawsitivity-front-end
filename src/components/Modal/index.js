import React from 'react'
import { Modal, Button } from 'antd';
import { InfoOutlined } from '@ant-design/icons';
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
          title={this.props.pet.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Age: {this.props.pet.age}</p>
          <p>Breed: {this.props.pet.breeds.primary} {this.props.pet.breeds.secondary}</p>
          <p>Bio: {this.props.pet.description} </p>
        </Modal>
      </>
    );
  }
}
export default ModalComp;