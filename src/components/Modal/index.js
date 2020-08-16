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
        // Can we make this props for name?
          title="Mochi"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            {/* Can we use props here as well? */}
          <p>Loves Kids</p>
          <p>Active</p>
          <p>Does not like cats</p>
          <p>rest of API info</p>
        </Modal>
      </>
    );
  }
}

export default ModalComp;