import React, { createContext } from 'react'
import { useReducer } from 'react';

import AppReducer from './AppReducer'
const initialState =
{
    transactions: [
        { id: 1, text: "books", price: -240, },
        { id: 2, text: "ASRT", price: -140, },
        { id: 3, text: "income", price: 1340, },
        { id: 4, text: "ashop", price: 140, }
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let deleteTransactions = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    let addTransactions = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>);
}
