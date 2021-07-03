const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // snippet: {
  //   type: String,
  //   required: true,
  // },
  // body: {
  //   type: String,
  //   required: true
  // },
  roll_no:{
      type:Number,
      required:true,
      unique:true
  },
  name:{
    type:String,
    required:true
  },
  class:{
    type:String,
    required:true
  },
  division:{
    type:String,
    required:true
  },
  dateofbirth:{
    type:Date,
    required:true
  },
  parent_mobile_no:{
    type:Number,
    required:true
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;