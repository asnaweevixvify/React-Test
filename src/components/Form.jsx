import { useState , useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props){
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [formValid,setFormValid] = useState(false)
    useEffect(()=>{
        const numericAmount = Number(amount)
        const checkData = title.trim().length>0 && numericAmount!==0
        setFormValid(checkData)
    },[title,amount])
    return(
        <div className='form-container'>
            <form onSubmit={saveItem}>
                <label><h2>ชื่อรายการ</h2></label>
                <input type='text' placeholder='ระบุชื่อรายการ' onChange={inputTitle} value={title}></input>
                <label><h2>จำนวนเงิน</h2></label>
                <input type='number' placeholder='ระบุจำนวนเงิน (รายรับ + , รายจ่าย -)' onChange={inputAmount} value={amount}></input>
                <button type='submit' disabled={!formValid}>บันทึกรายการ</button>
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
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }
}

export default Form