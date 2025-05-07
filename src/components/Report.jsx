import DataContext from "./data/DataContext";
import { useContext, useState } from 'react'
import './App.css'

function Report(){
    const name = useContext(DataContext)
    return(
        <>
        <p>รายรับ : {name.income} บาท</p>
        <p>รายจ่าย : {name.expense} บาท</p>
    </>
    )
}

export default Report