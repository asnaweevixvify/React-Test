import { useState } from 'react'
import './App.css'
import List from '../components/List'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const data = [
    {title:200,amount:40000},
    {title:'ค่าไฟ',amount:3000},
    {title:'เงินรับ',amount:750}
  ]
  return (
    <div className='list-container'>
      <ul>
          {data.map((item)=>{
              return <List title={item.title} amount={item.amount} key={uuidv4()}/>
          })}
      </ul>
    </div>
  )
}

export default App
