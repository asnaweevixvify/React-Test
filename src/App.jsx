import Navbar from './components/Navbar'
import Form from './components/form'
import TransactionList from './components/TransactionList'
import '../src/components/App.css'
import { useState } from 'react'


function App() {
  const [items,setItems] = useState([])
  function onAddNewItem(newItem){
      setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <>
      <Navbar />
      <h1 className='h1main'>โปรแกรมบันทึกรายรับรายจ่าย</h1>
      <Form onAddItem={onAddNewItem}/>
      <TransactionList items={items} />
    </>
  )
}

export default App
