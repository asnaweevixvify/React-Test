import { useState } from 'react'
import './App.css'

function Form(){
    return(
        <div className='form-container'>
            <form onSubmit={saveItem}>
                <label><h2>ชื่อรายการ</h2></label>
                <input type='text' placeholder='ระบุชื่อรายการ' onChange={inputTitle}></input>
                <label><h2>จำนวนเงิน</h2></label>
                <input type='number' placeholder='ระบุจำนวนเงิน' onChange={inputAmount}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
    function inputTitle(e){
        console.log(e.target.value);
    }
    function inputAmount(e){
        console.log(e.target.value);
    }
    function saveItem(e){
        e.preventDefault()
        console.log("save");
    }
}

export default Form