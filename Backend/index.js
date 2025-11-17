const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const authRoutes = require('./routes/auth')

// connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/spacelink'
console.log('MONGO env var:', process.env.MONGO_URI)
console.log('Connecting to MongoDB:', MONGO_URI)
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error', err))

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => res.json({ message: 'SpaceLink API' }))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
