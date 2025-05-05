import { useState } from 'react'
import './App.css'

function Form(){
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    return(
        <div className='form-container'>
            <form onSubmit={saveItem}>
                <label><h2>ชื่อรายการ</h2></label>
                <input type='text' placeholder='ระบุชื่อรายการ' onChange={inputTitle} value={title}></input>
                <label><h2>จำนวนเงิน</h2></label>
                <input type='number' placeholder='ระบุจำนวนเงิน' onChange={inputAmount} value={amount}></input>
                <button type='submit'>บันทึกรายการ</button>
            </form>
        </div>
    )
    function inputTitle(e){
        setTitle(e.target.value);
    }
    function inputAmount(e){
        setAmount(e.target.value);
    }
    function saveItem(e){
        e.preventDefault()
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        console.log(itemData);
        setTitle('')
        setAmount(0)
    }
}

export default Form