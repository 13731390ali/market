import React from 'react'
import Container from './components/container/Container'
import { Route,Routes } from 'react-router'
import PageLogin from './components/hero/log in App/PageLogin'
import Blog from './components/blog/Blog'
import Register from './components/Register/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Container/>}/>
        <Route path='/PageLogin' element={<PageLogin/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Register' element={<Register/>}/>
        
      </Routes>
   
    </div>
  )
}

export default App
