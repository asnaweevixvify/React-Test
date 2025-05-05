import Navbar from './components/Navbar'
import Form from './components/form'
import TransactionList from './components/TransactionList'
import '../src/components/App.css'


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
