require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const refreshTokenRouter = require('./routes/refreshTokens')

const app = express()

app.use(logger('dev'))
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ extended: false, limit:'50mb'}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/refresh-token', refreshTokenRouter)

module.exports = app
