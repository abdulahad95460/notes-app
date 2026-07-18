const Note = require("../models/note")

const createNote = async (req , res )=>{
try{
  const newNotes = await Note.create(req.body)

  res.status(201).json(newNotes)
}
catch(error){
    res.status(500).json({
        message : "failed to create an message",
        error : error.message
    })
}
}


const getNotes = async (req,res)=>{

    try{
   const notes = await Note.find()
   res.status(200).json(notes)

    }
    catch(error){
        res.status(500).json({
            message : "failed to fetch notes",
            error : error.message
        })
    }

}


module.exports={
    createNote,
    getNotes
}