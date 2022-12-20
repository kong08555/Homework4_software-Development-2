const express = require("express")
const app =  express()
const work1 = require('./Models/work1')
app.get('/',(req, res) => {
    res.send("Red devil army")
})

app.get('/about', (req,res) => {
    res.send("glory glory man U nited")
})


app.get("*", (req, res) =>{
    res.send("Error: 404 page Not found ")
})

app.listen(3000, () => {
    console.log("start Server at port [3000")
})