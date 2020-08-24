import React from 'react'
import { Modal, Button } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
import MapContainer from '../Map'
import "./style.css"

class ShelterModal extends React.Component {
  state = { visible: false};
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {

    return (
      <>
        <Button onClick={this.showModal} align="center" shape="circle" icon={<CompassOutlined />}></Button>
        <Modal className="shelterModalContainer"
          title={"Shelter Location"}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p>Address: {this.props.address1} </p>
        <MapContainer address1={this.props.address1} address2={this.props.address2} city={this.props.city} state={this.props.state} postcode={this.props.postcode}/>
        
        </Modal>
      </>
    );
  }
}

export default ShelterModal;