import React from 'react'
import Header from './components/Header'
import NamePicker from './components/NamePicker'

function App() {
  return (
    <div className="container lg:mx-auto">
      <Header />
      <div className="bg-white rounded-md shadow-md p-4">
        <NamePicker />
      </div>
    </div>
  )
}

export default App
