import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import {FiMapPin} from 'react-icons/fi'
import Hills from './Images/Hills.jpg'
import {FiEdit} from 'react-icons/fi'
import './Pages.css'
import CardHeader from 'react-bootstrap/esm/CardHeader'
const Products = () => {
  return (
    <>

        <Row className="prod1"style ={{display:"flex", justifyContent:"space-between" }}>
            <Col style ={{border:"2px solid green"}} >
            <Row>
              <Card style ={{width:"22rem"}}>
                <img src= {Hills} alt="hills" className='img-top' id="rec1"/>
                <CardHeader style ={{fontFamily: 'IBM Plex Sans'}}> Article</CardHeader>
              </Card>
            </Row>
            </Col>
            <Col  className="col-xs-xl"style ={{display:"flex", marginLeft:"120px",flexDirection:"row", alignItems:"center",justifyContent:" space-evenly", border:"2px solid green", boxSizing:"border-box"}}> <div> <FiMapPin/> <input type='text' value ='Noida,India'style ={{outline:"none", border:'transparent', background:"#fefefe", fontWeight:"lighter",textTransform:"capitalize"}}/></div><div><FiEdit/> </div> </Col>
        </Row>

    
    </>
  )
}

export default Products