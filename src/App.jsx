import { useState } from 'react'
import './App.css'
import Header from './components/header'
import MainPage from './components/main-page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainPage />
      
    </>
  )
}

export default App
