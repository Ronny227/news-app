import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { NewsProvider } from './context/NewsContext'

function App() {
  

  return (
    <NewsProvider>
      <Navbar />
      <Home />
    </NewsProvider>
  )
}

export default App
