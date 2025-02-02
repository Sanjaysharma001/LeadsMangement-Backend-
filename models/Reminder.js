const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema(
    {
       title:{
                  type:String,
                  required:true,
              },
              description:{
                  type:String,
                  required:false,
              },
              leadId: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Lead", 
                  required: true,
                },
               
              createdAt:{
                  type:Date,
                  required:true,
                  default:Date.now(),
              },
              updateAt:{
                  type:Date,
                  default:Date.now(),
                  required:true,
              },
          }
      )
      
      module.exports = mongoose.model("Remind",reminderSchema);