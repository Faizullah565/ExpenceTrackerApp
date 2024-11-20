import React, { useContext } from 'react'
import "./History.css";
// import Global Context
import { GlobalContext } from '../../context/GlobalState'
import TransactionHistory from '../transactionHistory/TransactionHistory'

function History() {
  const { transactions } = useContext(GlobalContext)
  console.log(transactions)
  return (
    <div>
      <h3>
        Transaction history
      </h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <TransactionHistory key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}

export default History
