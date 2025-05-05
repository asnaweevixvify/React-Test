import Navbar from './Navbar'
import Form from './Form'
import TransactionList from './TransactionList' 
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <h1 className='h1main'>โปรแกรมบันทึกรายรับรายจ่าย</h1>
      <Form />
      <TransactionList />
    </>
  )
}

export default App
