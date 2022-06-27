import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.price);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h1>  Balance</h1>

            <p>  <strong> ${total} </strong> </p>
        </>
    )
}

export default Balance