import { useState } from 'react'
import Navbar from './Components/Navbaar'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Components/signup'
import Body from './Components/Body'
import Third_page from './Components/Third_page'
import Second_page from './Components/second_page'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Body/>} />
            <Route path='/contact' element={<Signup />} />
            <Route path='/Second_page' element={<Second_page />} />
            <Route path='/about' element={<Second_page /> }/> 
            <Route path='/service' element={<Third_page /> }/> 
            <Route path='/Third_page' element={<Third_page /> }/> 
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>


      
    </>
  )
}

export default App
