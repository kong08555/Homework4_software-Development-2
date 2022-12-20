const express = require('express')
const app = express()
const worker = require('./Model/work1')

app.get('/',(req, res) => {
    res.send('hello world')
})