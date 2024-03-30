// student.routes.js

import express from "express";
import StudentController from "../controllers/student.controller.js"; // Importa el controlador
const router = express.Router();

// Rutas CRUD para estudiantes
router.post("/students", StudentController.createStudent); // Usa la propiedad default para acceder al controlador
router.get("/students", StudentController.getAllStudents);
router.get("/students/:no_control", StudentController.getStudentByNoControl);
router.put("/students/:no_control", StudentController.updateStudent);
router.delete("/students/:no_control", StudentController.deleteStudent);

export default router;
