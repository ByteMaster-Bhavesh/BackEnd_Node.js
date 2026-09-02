const express = require('express');
const studModel = require("./models/stud.model")

const app = express();
app.use(express.json());



app.post("/student", async (req, res)=>{
    const data = req.body;
    await studModel.create({
        Roll_No:data.Roll_No,
        Name:data.Name,
        Marks:data.Marks,
    })

    res.status(201).json({
        message:"Student Info Successfully Upload"
    });
});

app.get("/student", async (req, res)=>{
    
    const student = await studModel.find()

    res.status(200).json({
        message: 'Student Record :-',
        student: student
    });
});

app.delete("/student/:id", async(req, res)=>{
    const id = req.params.id

    await studModel.findByIdAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Student Information Deleted Successfully",
    })

})

app.patch("/student/:id",async (req, res)=>{
    const id = req.params.id
    const Roll_No = req.body.Roll_No
    const Name = req.body.Name
    const Marks = req.body.Marks
    
    await studModel.findByIdAndUpdate(
        {
            _id:id
        },
        {
            Roll_No: Roll_No,
            Name:Name,
            Marks:Marks,
        }
    )

    res.status(200).json({
        messag:"Student Information Succeesfully Updated"
    })
})



module.exports = app
 