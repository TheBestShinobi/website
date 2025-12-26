import { useState } from 'react'
import dude from './assets/dude.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/main.css'

import Start from "./components/start";
import Game from "./components/game"

function App() {
  const [count, setCount] = useState(0)
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
    {gameStarted ? (
      <Game/>
    ) : (
      <Start onStart={() => setGameStarted(true)} />
    )}
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.roblox.com/games/510411669/Fantastic-Frontier" target="_blank">
          <img src={dude} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My website :3</h1>
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
      
    </>
  )
}

export default App
