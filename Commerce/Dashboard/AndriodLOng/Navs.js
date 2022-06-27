import { Search } from '@mui/icons-material'
import React from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import {Nav } from 'react-bootstrap'
import './Navs.css'
const Navs = () => {
  return (
    <>
   <Nav className="navbar-sm xl justify-content-between" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" id='logo'>Atgworld</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link> <Search/><input type ="text" placeholder='search for your favorite groups in Atg'  style={{outline:"none", width:"250px"}}/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><span style={{color:"black"}}>Create account</span>.Its's free <IoMdArrowDropdown/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
    </Nav.Item>
  </Nav>
   
    
</>
  )
}

export default Navs