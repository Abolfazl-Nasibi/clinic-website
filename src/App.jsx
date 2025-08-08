import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import MainPage from './components/mainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <Header />
      <MainPage />
      
    </div>
  )
}

export default App
