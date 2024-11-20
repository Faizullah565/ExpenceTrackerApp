import React, {createContext, useReducer} from "react";

// Import AppReducer
import AppReducer from "./AppReducer";

//Create initial state
const initialState={
    transactions:[]
}
// create the Global Context
export const GlobalContext=createContext(initialState);

// create a provider for the global context
export const GlobalProvider=({children})=>{
    const [state, dispatch]=useReducer(AppReducer, initialState)

// Delete Existing Transaction Action
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

// Add New Transaction Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
// Edit Transaction
function editTransaction(transaction) {
    dispatch({
        type: 'EDIT_TRANSACTION',
        payload: {
            transaction:transaction,
            id:transaction.id
        }
    })
}
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                addTransaction,
                deleteTransaction,
                editTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}