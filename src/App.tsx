import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg?url'
import './App.css'
import { Icon } from './index'
import icon from './assets/icons/search.svg'
import icon1 from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Icon name="test" size={[60, 60]} />
      <Icon name='user' color='red' size={40} />
      <Icon src={icon} size={32} color="blue" />
      <Icon src={icon1} size={62} color="blue" />
    </>
  )
}

export default App
