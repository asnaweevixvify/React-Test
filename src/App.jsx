import Navbar from './components/Navbar'
import Form from './components/form'
import TransactionList from './components/TransactionList'
import '../src/components/App.css'
import { useState , useEffect } from 'react'
import DataContext from './components/data/DataContext'
import Report from './components/report'


function App() {
  const [items,setItems] = useState([])
  const [reportIncome,setreportIncome] = useState(0)
  const [reportExpense,setreportExpense] = useState(0)

  function onAddNewItem(newItem){
      setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income  = amounts.filter(e=>e>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(e=>e<0).reduce((total,element)=>total+=element,0))*-1
    setreportIncome(income)
    setreportExpense(expense)
  },[items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={
      {
        income:reportIncome,
        expense:reportExpense
      }
    }>
      <Navbar />
      <h1 className='h1main'>โปรแกรมบันทึกรายรับรายจ่าย</h1>
      <Report />
      <Form onAddItem={onAddNewItem}/>
      <TransactionList items={items} />
    </DataContext.Provider>
  )
}

export default App
