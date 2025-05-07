import { useContext, useState } from 'react'
import './App.css'
import List from './List';

function TransactionList(props) {
  const items = props.items
  return (
    <div className='list-container'>
      <ul>
          {items.map((item)=>{
              return <List title={item.title} amount={item.amount} key={item.id}/>
          })}
      </ul>
    </div>
  )
}

export default TransactionList
