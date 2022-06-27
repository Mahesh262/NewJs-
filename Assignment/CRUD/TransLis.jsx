import React, { useContext } from 'react'
import Transcationsdata from './Transcationsdata'
import { GlobalContext } from '../Context/GlobalState';

const List = () => {
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return (
        <>
            <h3>History</h3>
            <ul variant='dark'>
                {transactions.map((transaction, index) => <Transcationsdata key={index} transaction={transaction} />)}
            </ul>
        </>
    )
}

export default List