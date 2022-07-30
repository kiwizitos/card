import { useState } from 'react'
import Like from './components/like'
import './index.css'

function App() {

  return (
    <div className="w-full h-screen bg-slate-300">
      Usuário
      <Like />
    </div>
  )
}

export default App
