import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="flex gap-4 justify-center mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/src/assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="card bg-white/5 p-6 rounded-lg shadow-sm dark:bg-gray-800">
        <button onClick={() => setCount((count) => count + 1)} className="px-3 py-2 rounded bg-indigo-600 text-white">
          count is {count}
        </button>
        <p className="mt-3">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-6 text-sm text-gray-500">Click on the Vite and React logos to learn more</p>
    </>
  )
}

function App() {
  const isAuthenticated = !!localStorage.getItem('authUser')

  const handleLogout = () => {
    localStorage.removeItem('authUser')
    location.href = '/'
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 p-0">
        <div className="max-w-6xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
