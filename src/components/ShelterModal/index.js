import React from 'react'
import { Modal, Button } from 'antd';
import { InfoOutlined } from '@ant-design/icons';
import petAPI from "../../utils/petAPI"
import MapContainer from '../Map'
import userAPI from "../../utils/userAPI";
import matchAPI from "../../utils/matchAPI";

class ShelterModal extends React.Component {
  state = { 
      visible: false,
      matchesResult: [],
      queryResult: []
 };

  

  componentDidMount() {
    this.gatherUserAndPetfinderInfo()
  }

  gatherUserAndPetfinderInfo = async () => {
    let { data: { userId } } = await userAPI.getCurrentUserInfo()
    let { data: { userData: { Matches } } } = await matchAPI.getMatchInfo(userId)
    this.setState({ matchesResult: Matches })
    const queryResultCopy = [... this.state.queryResult]
    const matchesResultCopy = [... this.state.matchesResult]
    return matchesResultCopy.forEach(async ({ id, petfinderId, isLiked }) => {
      if (isLiked) {
        let { data } = await petAPI.byId(petfinderId)
        queryResultCopy.push({ ...data, id, isLiked })
        this.setState({ queryResult: queryResultCopy })
      }
    })
  }
  showModal = () => {
    this.setState({visible: true});
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
          title={"Shelter Location"}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        ><p>Address: </p>
          {this.state.queryResult[0]?<MapContainer address={this.state.queryResult[0].animal.contact.address.address1}></MapContainer>:null}
        </Modal>
      </>
    );
  }
}
export default ShelterModal;