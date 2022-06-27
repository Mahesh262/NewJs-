import React, { useContext } from 'react'
import { Col, Nav } from 'react-bootstrap'
import { GlobalContext } from '../Context/GlobalState'
const Transcationsdata = ({ transaction }) => {
    const { deleteTransactions } = useContext(GlobalContext)
    let sign = transaction.price < 0 ? '-' : '+';
    sign = transaction.price < 0 ? 'Red' : 'blue';
    return (
        <>

            <Col className={transaction.price < 0 ? 'minus' : 'plus'} style={{ display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', textTransform: 'uppercase', borderRight: '1px solid #c39797' }} >

                <Nav.Link>  {transaction.text}    </Nav.Link>
                <Nav.Link> {transaction.id} </Nav.Link>
                <Nav.Link> {sign}${Math.abs(transaction.price)} &nbsp;<button className='btn btn-success' onClick={() => deleteTransactions(transaction.id)}>X</button></Nav.Link>

            </Col>
        </>
    )
}

export default Transcationsdata