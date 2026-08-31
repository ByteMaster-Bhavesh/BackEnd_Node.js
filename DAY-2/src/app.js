const express = require('express');
const app = express();
module.exports = app
 
app.use=(express.json())

const notes = []

app.post("/notes", (req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"Note created successfully"
    })
})