import React from 'react'
import { Card,Row,Col, Tabs,Tab } from 'react-bootstrap'
import Pcs from './Images/Pcs.jpg'
import {MdOutlineGroupAdd} from 'react-icons/md'
import './Banner.css'
const Banners = () => {
  const [key, setKey] = React.useState('Allposts');
  return (
    <>
    <Row>
      <Card className="card-sd">
      <img src= {Pcs} alt="pcs" className='img-fluid' />
      </Card>

      <Col id='col'>
       <Col>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-2-xs xl" style={{ width:"390px"}}
    >
      <Tab  className="posts"eventKey="Allposts" title="All Posts(32)">
      </Tab>
      <Tab  className="secpost"eventKey="Article" title="Article">
      </Tab>
      <Tab  eventKey="Event" title="Event"></Tab>
      <Tab eventKey="Education" title="Education">
      </Tab>
    </Tabs>
    </Col>
    <Col style ={{display:"flex" ,alignItems:"center", justifyContent:"flex-end"}}>
    <h5 style={{width:"120px"}}> Write a post</h5>
    <h5 style={{width:"140px",textTransform:"Capitalize"}} className="btn btn-primary"><MdOutlineGroupAdd/> join group</h5>
    </Col>
    </Col>
      </Row>
    </>
  )
}

export default Banners
