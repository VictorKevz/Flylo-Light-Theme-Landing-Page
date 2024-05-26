import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./components/Home"
import Features from './components/Features'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <main className='wrapper'>
    <div className='inner-container'>
      <Home/>
      <Features/>
      <SignIn/>
      <Footer/>
    </div>  
    </main>
  )
}

export default App
