/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Nav, Row, Col, Button } from 'react-bootstrap'
import { FcRating } from 'react-icons/fc'
import { useParams } from 'react-router-dom';
const Edit = () => {
    const [coss, setData] = useState([]);

    const { id } = useParams();
    useEffect(() => { fetchDetails() }, [])

    const fetchDetails = () => {
        axios.get(`https://shoppingapiacme.herokuapp.com/shopping/${id}`)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
            })
            .catch((error) => console.log(error))
    };
    return (
        <>
            <Nav className="justify-content-center bg-Success" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Row>

                return <center>
                    <div className='pt-3 w-50' style={{ fontFamily: "'Festive', 'cursive','Ubuntu',sansSerif" }} key={coss.id}>
                        <Col>
                            <img src={coss.image} style={{ width: "300px" }} alt=".."
                            />
                        </Col>
                        <Col> <b> Details</b>{coss.description} <br />
                            <Row className='btn btn-success'> Price{coss.price}</Row> <br />
                            <Row className='pt-3'> Rating{coss.count} <FcRating /></Row>
                            <Row className='text-warning'>{coss.title}</Row>
                            <Button>Add to Cart</Button>
                        </Col>

                    </div>
                </center>


            </Row>
        </>
    )
}

export default Edit