import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) return setError(data?.error || 'Login failed')
      localStorage.setItem('authToken', data.token)
      localStorage.setItem('authUser', JSON.stringify(data.user))
      navigate('/dashboard')
    } catch (err) {
      setError('Network error')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Log in to SpaceLink</h2>
      {error && <div className="mb-3 text-sm text-red-400">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:border-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:border-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="px-4 py-2 rounded bg-indigo-600 text-white" type="submit">Sign in</button>
          <Link to="/signup" className="text-sm text-indigo-300">Create account</Link>
        </div>
      </form>
    </div>
  )
}
