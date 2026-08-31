const express = require('express');

const app = express()


app.get("/hack", (req,res) => {
    res.send("Hann Jiiii Hackerrrr Bhaiiiii")
})

app.listen(3000)
