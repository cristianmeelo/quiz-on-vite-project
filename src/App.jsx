import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Welcome from './components/welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Welcome/>
    </div>
  )
}

export default App
