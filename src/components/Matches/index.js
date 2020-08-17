import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
// import matchAPI from '../../utils/matchAPI'
const columns = [
  {
    title: '',
    dataIndex: 'imgSrc',
    key: 'imgSrc',
    render: imgSrc => <img className="tableImage" src={imgSrc} alt="whoops"/>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Breed',
    dataIndex: 'breed',
    key: 'breed',
  },

  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link>//matches/:id</Link>
        <a>Remove</a>
      </Space>
    ),
  },
];
const data = [ //dynamically create this with API info based on matches
  {
    key: '1',
    imgSrc:"https://www.petmd.com/sites/default/files/puppy-potty-training-388719256.jpg",
    name: "Dobie",
    breed: 'Doberman Pinscher',
  },
  {
    key: '2',
    imgSrc: 'Jim Green',
    name: "Doug",
    breed: 'Pug',
  },
  {
    key: '3',
    imgSrc: 'Joe Black',
    name: "Max",
    breed: 'Labrador Retriever',
  },
];
export default function MatchesComp() {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}