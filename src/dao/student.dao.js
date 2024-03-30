// student.dao.js

import StudentModel from '../models/student.model.js';

const StudentDAO = {
  async createStudent(data) {
    return await StudentModel.create(data);
  },

  async getAllStudents() {
    return await StudentModel.find();
  },

  async getStudentByNoControl(no_control) {
    return await StudentModel.findOne({ no_control });
  },

  async updateStudent(no_control, data) {
    return await StudentModel.findOneAndUpdate({ no_control }, data, { new: true });
  },

  async deleteStudent(no_control) {
    await StudentModel.deleteOne({ no_control });
  }
};

export default StudentDAO;
