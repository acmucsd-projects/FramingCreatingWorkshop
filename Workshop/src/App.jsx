import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ACMLogo from './assets/ACM.png'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*
    Add your components here. Hint: How would add a self-closing/void HTML element?
    */}
      <div>
        <a href="https://projects.acmucsd.com/" target="_blank">
          <img src={ACMLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ACM + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the ACM and React logos to learn more
      </p>
     
    </>
  )
}

export default App
