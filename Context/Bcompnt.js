import React, { useEffect, useState } from 'react'
import { Container, Nav, Row, Col, } from 'react-bootstrap'
import axios from 'axios'
import { FcRating } from 'react-icons/fc'
import { useNavigate, Link } from 'react-router-dom'
// import Edit from './Edit'

const Bcompnt = () => {
    const [products, SetProducts] = useState([])
    useEffect(() => {
        Fetchroducts();
    }, [])
    const Fetchroducts = () => {
        axios.get('https://shoppingapiacme.herokuapp.com/shopping').then((res) => {

            SetProducts(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }
    const SUbmits = e => {
        e.preventDefault();
        console.log(products)
    }
    const onto = useNavigate();

    const marks = () => {
        onto('/Edit')
    }

    // let { id } = useParams();
    return (
        <>
            <Nav className="justify-content-center" fill variant="tabs">
                <Nav.Item>
                    <Nav.Link onClick={marks}>App</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Items</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Container>
                <form onSubmit={SUbmits}>
                    <input type="text" className='form-control justify-content-center' />
                    <button type="submit" className='form-Control btn btn-success'>Submit</button>
                </form>
                {products.map((product) => {
                    return <center key={product.id}>
                        <Row className='pt-3 w-50' style={{ fontFamily: "'Festive', 'cursive','Ubuntu',sansSerif" }}>
                            <Col> <img src={product.image} style={{ width: "300px" }} alt=".."
                            />
                            </Col>
                            <Col> <b> Details</b>{product.description} <br />
                                <Row className='btn btn-success'> Price{product.price}</Row> <br />
                                <Row className='pt-3'> Rating{product.count} <FcRating /></Row>
                                <Row className='text-warning'>{product.title}</Row>
                            </Col>
                            <Link to={`/Edit/${product.id}`}>Links</Link>
                        </Row>
                    </center>

                })}
            </Container>

        </>
    )
}

export default Bcompnt