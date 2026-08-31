const express = require('express');
const app = express();
module.exports = app
 
app.use(express.json())

const notes = []

app.post("/notes", (req,res)=>{                             //push OR sent Note to server.
    notes.push(req.body)
    res.status(201).json({
        message:"Note created successfully"
    })
})

app.get("/notes",(req,res) => {                             //Get Note from server.
    console.log( notes )
    res.status(200).json({
        message:"Successfully Recives Note",
        notes:notes
    })
})

app.delete("/notes/:index", (req,res)=>{                    //Delete Note.
    const index = req.params.index;
    delete notes [index]
    res.status(200).json({
        message:"Note is successfully deleted"
    })

})

app.patch("/notes/:index", (req, res) => {                  //Update Note which already located at server.
    const index = req.params.index;
    const title = req.body.title
    const description = req.body.description

    notes[ index ].title = title
    notes[ index ].description = description

    res.status(200).json({
        message:"Note is successfully updated"
    })
})