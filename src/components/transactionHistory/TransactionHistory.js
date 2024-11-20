import React, { useContext } from 'react'
import './TransactionHistory.css'
import { GlobalContext } from '../../context/GlobalState'

function TransactionHistory({ transaction }) {

  const { addTransaction } = useContext(GlobalContext)
  const ediTransaction = () => {
    const detail = prompt("enter transaction detail")
    const amount = +prompt("enter transaction amount")
    console.log(detail, amount, transaction.id)
    const editTransactions = {
      id: transaction.id,
      description: detail,
      transactionAmount: amount
    }
    deleteTransaction(transaction.id)
    addTransaction(editTransactions)
  }
  // editTransaction(ediTransaction)
  const { deleteTransaction } = useContext(GlobalContext)
  const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';
  console.log(transaction.id)
  return (
    <li className={transactionType}>
      <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
      {transaction.description}
      <span>{transaction.transactionAmount}</span>
      <button className='edit-btn' onClick={ediTransaction}>Edit</button>
    </li>

  )
}

export default TransactionHistory
