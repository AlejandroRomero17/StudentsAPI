// student.model.js

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  no_control: { type: String, required: true },
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  grade: { type: String, required: true },
  average: { type: String, required: true }
}, { versionKey: false });


const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;
