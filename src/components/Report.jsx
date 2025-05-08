import DataContext from "./data/DataContext";
import { useContext, useState } from 'react'
import './App.css'

function Report(){
    const name = useContext(DataContext)
    return(
        <>
        <div className="total">
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{name.income - name.expense}</h1>
        </div>
        <div className="earnpaycontain">
            <div className="earncontain">
                <h4>รายได้ทั้งหมด</h4>
                <h2>฿{name.income}</h2>
            </div>
            <p className="line"></p>
            <div className="paycontain">
                <h4>รายจ่ายทั้งหมด</h4>
                <h2>฿{name.expense}</h2>
            </div>
        </div>
    </>
    )
}

export default Report