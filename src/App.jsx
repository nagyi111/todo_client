import './App.css'
import Login from './components/Login';
import { MyTodos } from './components/MyTodos';
import { useState } from 'react'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return(
      <div className='bg-indigo-950 text-indigo-50 min-h-screen'>
      <h2 className='flex item-center flex-col p-3 font-bold text-3-x1'>My Todos</h2>
      {isLoggedIn ? <MyTodos setisLoggedIn={setisLoggedIn} /> : <Login setisLoggedIn={setisLoggedIn}/>}

      </div>
  )
}

export default App;