const express = require('express')
const config = require('./config/config')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const errorMiddleware = require('./middlewares/error.middleware')

const userRoutes = require('./router/user.router')
const reposRoutes = require('./router/repos.router')

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173']
}))


app.use(helmet())
app.use(helmet({ crossOriginEmbedderPolicy: true }))

app.use(`/api/${config.app.API_VERSION}`, userRoutes)
app.use(`/api/${config.app.API_VERSION}`, reposRoutes)

app.use(errorMiddleware)

module.exports = app;