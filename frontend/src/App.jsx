import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Registration from './pages/Registration'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Registration/>}/>
        
      </Routes>
    </>
  )
}

export default App
