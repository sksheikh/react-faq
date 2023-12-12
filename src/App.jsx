import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { faqs } from './components/data'
import Faqs from './components/faqs'


function App() {

  return (
    <>
    <Card>
      <h2 style={{color: '#000'}}>FAQ</h2>
      <Faqs faqs={faqs}/>
    </Card>
    </>
  )
}

export default App
