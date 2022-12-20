const express = require("express")
const app =  express()
const work1 = require('./Models/work1')
app.get('/',(req, res) => {
    res.send("website can work")
})

app.get('/about', (req,res) => {
    res.send("other website can work")
})


app.get("*", (req, res) =>{
    res.sendFile(__dirname + '/public/error.html')
})

app.listen(3001, () => {
    console.log("start Server at port [3001]")
})