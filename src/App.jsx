import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './Text' 

function App() {


  const [count, setCount] = useState(0)

  return (
    
    <>
      <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        padding: "100px",
      }}
      >
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: "purple", textAlign: "center" }}>
        Katelyn learning react
      </h1>
       

<Text/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App

// change at least one styling element on this page