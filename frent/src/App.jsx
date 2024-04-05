import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{BrowserRouter,Routes,Route}from"react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Regsiter from './Pages/Regsiter'
import Profile from './Pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/regsiter'element={<Regsiter></Regsiter>}></Route>
      <Route path='/profile'element={<Profile></Profile>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
