import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }
    try {
      const res = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) return setError(data?.error || 'Signup failed')
      navigate('/login')
    } catch (err) {
      setError('Network error')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Create an account</h2>
      {error && <div className="mb-3 text-sm text-red-400">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Full name</label>
          <input
            className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:border-indigo-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        <div>
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:border-indigo-400"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="px-4 py-2 rounded bg-indigo-600 text-white" type="submit">Create account</button>
          <Link to="/login" className="text-sm text-indigo-300">Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}
