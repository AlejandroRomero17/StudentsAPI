// student.controller.js

import StudentDAO from '../dao/student.dao.js';

const StudentController = {
  async createStudent(req, res) {
    try {
      const student = await StudentDAO.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllStudents(req, res) {
    try {
      const students = await StudentDAO.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getStudentByNoControl(req, res) {
    try {
      const student = await StudentDAO.getStudentByNoControl(req.params.no_control);
      if (!student) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateStudent(req, res) {
    try {
      const { no_control } = req.params; // Obtener el número de control original del parámetro de la URL
      const updatedStudent = req.body; // Obtener los datos actualizados del estudiante del cuerpo de la solicitud
      
      // Actualizar al estudiante por su número de control original
      const student = await StudentDAO.updateStudent(no_control, updatedStudent);
      if (!student) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      res.json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteStudent(req, res) {
    try {
      await StudentDAO.deleteStudent(req.params.no_control);
      res.json({ status: "Student succesfully deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default StudentController;
