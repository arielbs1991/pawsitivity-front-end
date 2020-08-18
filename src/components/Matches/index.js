import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
// import matchAPI from '../../utils/matchAPI'

export default function MatchesComp(props) {
  return(

    <div className="animalCard">
      <img src={props.imageSrc}/>
      <h1 align="center">name</h1>
      <Button><Link to="../petDetails/:{petId}">View Details</Link></Button>
    </div>
  )
}

// const columns = [
//   {
//     title: '',
//     dataIndex: 'imgSrc',
//     key: 'imgSrc',
//     render: imgSrc => <img className="tableImage" src={imgSrc} alt="whoops"/>,
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Breed',
//     dataIndex: 'breed',
//     key: 'breed',
//   },

//   {
//     title: '',
//     key: 'action',
//     render: (text, record) => (
//       <Space size="middle">
//         <Button><Link to="../petDetails">Check me out!</Link></Button>
//         {/* <Button>Unmatch</Button> */}
//       </Space>
//     ),
//   },
// ];
// const data = [ //dynamically create this with API info based on matches
//   {
//     key: '1',
//     imgSrc:"https://www.petmd.com/sites/default/files/puppy-potty-training-388719256.jpg",
//     name: "Dobie",
//     breed: 'Doberman Pinscher',
//   },
// ];
// export default function MatchesComp() {
//     return (
//         <div>
//             <Table columns={columns} dataSource={data} />
//         </div>
//     )
// }