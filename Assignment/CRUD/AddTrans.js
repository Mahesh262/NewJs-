import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';
const AddTrans = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0);
  const { addTransactions } = useContext(GlobalContext)
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      price: +amount
    }
    addTransactions(newTransaction);

  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)
          </label>

          <input type="number" className='form-control' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>

        <button type='submit' className="form-control btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTrans