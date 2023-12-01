const mongoose = require('mongoose');

const noteSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    title:{
        type:String,
        required:true
    },
   description:{
    type:String,
    required:true,
    
   },
   tag:{
    type:String,
   default:'general'

   },
    date:{
        type:Date,
        default:Date.now
    }})

        const notes=mongoose.model('notes',noteSchema)
        module.exports=notes
