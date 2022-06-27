import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GlobalContext } from '../Context/GlobalState'
const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map((transaction) => transaction.price)
    const income = amount
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    return (
        <>
            <Container>

                <Row style={{ display: 'flex', background: "yellow", textAlign: 'center' }}>
                    <Col style={{ background: 'white', border: '2px solid #dedede' }}>
                        <h4>Income</h4>
                        <p className="money plus"> {income}</p>
                    </Col>
                    <Col style={{ background: 'white', border: '2px solid #dedede' }}>
                        <h4>Expense</h4>
                        <p className="money minus">{expense}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IncomeExpense