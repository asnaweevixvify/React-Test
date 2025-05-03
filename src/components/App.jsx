import { useState } from 'react'
import './App.css'
import List from '../components/List'

function App() {
  const data = [
    {title:'เงินเดือน',amount:40000},
    {title:'ค่าไฟ',amount:3000},
    {title:'เงินรับ',amount:750},
    {title:'ค่ารักษาพยาบาล',amount:7000}
  ]
  return (
    <div className='list-container'>
      <ul>
          {data.map((item)=>{
              return <List title={item.title} amount={item.amount} />
          })}
      </ul>
    </div>
  )
}

export default App
