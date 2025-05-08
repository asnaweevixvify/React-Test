import Form from './components/form'
import TransactionList from './components/TransactionList'
import '../src/components/App.css'
import { useState , useEffect , useReducer } from 'react'
import DataContext from './components/data/DataContext'
import Report from './components/report'
import About from './components/About'
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'


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

  const [showReport,setShowReport] = useState(false)

  function reducer(state,action){ 
    switch (action.type) { 
      case 'true':
        return setShowReport(true) 
      case 'false':
        return setShowReport(false)
    }
  }

  const [result,dispatch] = useReducer(reducer,showReport) 

  return (
    <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
      <Router>
      <div className='nav-container'>
            <ul>
                <li className='li'><Link to="/"> Home </Link></li>
                <li className='li'><Link to="/insert"> About </Link></li>
                <li>Contact</li>
            </ul>
          <Routes>
            <Route path='/' exact element={
              <>
                <h1 className='h1main'>โปรแกรมบันทึกรายรับรายจ่าย</h1>
                { showReport && <Report />}
                <button onClick={()=>dispatch({type:"true"})}>แสดง</button>
                <button onClick={()=>dispatch({type:"false"})}>ซ่อน</button>
                <Form onAddItem={onAddNewItem}/>
                <TransactionList items={items} />
              </>}>
            </Route>
            <Route path='/insert' element={<About />}>
            </Route>
            </Routes>
      </div>
      </Router>
    </DataContext.Provider>
  )
}

export default App
