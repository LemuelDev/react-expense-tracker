import { useEffect, useRef, useState } from 'react'
import './Components.css'

const TrackerComponent = () => {

    // useReffff
    const inputRef = useRef();
    const amountRef = useRef();

    // statesss
    const [expense, setExpense] = useState('')
    const [amount, setAmount] = useState('')
    const [amountList, setAmountList] = useState([])
    const [expenseList, setExpenseList] = useState([])
    const [error, setError] = useState('')

    // useEffect
    useEffect (() => {
        inputRef.current.focus()
    }, [])


    // arrow functions
    const handleForm = (event) => {
        event.preventDefault()
        if (expense && amount) {
            setExpenseList([...expenseList, expense])
            setAmountList([...amountList, amount ])
            setExpense('')
            setAmount('')
            setError('')
        }else {
            setError('Cannot track your expense...')
            inputRef.current.focus()
        }
    }

    const handleRemove = (listIndex) => {
        setAmountList(prevState => prevState.filter((item,index )=> index !== listIndex) )
        setExpenseList(prevState => prevState.filter((item,index )=> index !== listIndex) )
    }

  return (
    <div className='form'>
        <form onSubmit={handleForm}>
            <div className='input-section w-100 '>
                 <input type="text" ref={inputRef} placeholder='Enter Expense' className='form-control mb-2' value={expense} onChange={(event) => setExpense(event.target.value)}/>
                 <input type="number" ref={amountRef} placeholder='Enter Amount' className='form-control mb-2'value={amount} onChange={(event) => setAmount(event.target.value)}/>
                 { error ? <p className='pt-2 text-danger text-center'>{error}</p> : null}
            </div>
            <button className='btn btn-primary m-auto d-grid' type='submit'>Enter Expense</button>
        </form>
        <div className="results">
            <div className="expense-section">
                {expenseList.map((item, index) => {
                    return (
                       <div key={index} className='lists'>
                            <li>{item}</li>
                             <h4>{amountList[index]}</h4>
                             <button className="btn btn-danger" onClick={() => handleRemove(index)}>Remove</button>
                       </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default TrackerComponent