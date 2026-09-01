const express = require('express');
const noteModel =require('./models/note.model')

const app = express();
app.use(express.json());

app.post('/notes', async(req, res) => {
    const data = req.body
   
    await noteModel.create({
        title:data.title,
        description:data.description, 

    })
    res.status(201).json({
        message:"Note created successfully"
    })
})

app.get('/notes',async(req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Your Note is here",
        notes : notes
    })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
     
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message:"Note is deleted successfully"
    })

})


app.patch('/notes/:id', async(req, res) => {
    const id = req.params.id
    const title = req.body.title
    const description = req.body.description

    await noteModel.findByIdAndUpdate(
        {
        _id:id
        },
        {
        title: title,
        description:description,
        }
    )

        res.status(200).json({
            message:"Successfully updated Note"
        })
    })


module.exports = app;

