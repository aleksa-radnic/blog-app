import { useState } from 'react'
import './App.css'
import ActionAreaCard from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ActionAreaCard/>
      </div>
    </>
  )
}

export default App
