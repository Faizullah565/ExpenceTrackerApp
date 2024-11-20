
import React, { useState, useContext } from 'react'
import './NewTransaction.css'
import { GlobalContext } from '../../context/GlobalState';
function NewTransaction() {
    
    const [description, setDescription]=useState('');
    const [transactionAmount, setTransactionAmount]= useState('')

    const {addTransaction}=useContext(GlobalContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
        setDescription('')
        setTransactionAmount('')
    }
  return (
    <div>
        <h3>
            Add New Transaction
        </h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor='description'>
                    Description
                </label><br/>
                <input type='text'
                name='description'
                required
                id='descrption'
                value={description}
                placeholder='Enter Description detail'
                onChange={(e)=>setDescription(e.target.value)}
                >
                </input>
            </div>
            <div className='form-control'>
                <label htmlFor='newTransaction'>
                    Transaction Amount
                </label><br/>
                <input
                name='amount'
                type='number'
                required
                id='transactionAmount'
                value={transactionAmount}
                placeholder='Enter Dollar Value'
                onChange={(e)=>setTransactionAmount(e.target.value)}
                >
                </input>
            </div>
            <button className="btn" >Add Transaction</button>
        </form>
      
    </div>
  )
}

export default NewTransaction
