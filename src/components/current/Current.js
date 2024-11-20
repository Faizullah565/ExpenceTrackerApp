import React, {useContext} from 'react'
import './Current.css'

import { GlobalContext } from '../../context/GlobalState'
function Current() {
  const {transactions}= useContext(GlobalContext)
  const transactionAmounts= transactions.map(transaction=>transaction.transactionAmount)
  const currentAmount=transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const balance=currentAmount>=0?"positive":"negative";
  return (
    <div>
      <h4>Current Amount</h4>
      <h1 id='balance' className={balance}>${currentAmount}</h1>
    </div>
  )
}

export default Current
