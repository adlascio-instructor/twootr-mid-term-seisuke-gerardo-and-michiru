import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const authorSlug = "bar"
  return (
    <>
      <h1>Twootr</h1>
      <img src={`https://avatars.dicebear.com/api/bottts/${authorSlug}.svg`} />
    </>
  )
}

export default App
