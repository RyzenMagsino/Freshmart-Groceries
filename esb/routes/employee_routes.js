const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/employee_controller");

const employeeController = new EmployeeController();

// Add Employee
router.post("/employee/add", async (req, res) => {
    console.log("Request received at /employee/add:", req.body);
    try {
        const result = await employeeController.addEmployee(req.body);
        res.json(result);
    } catch (error) {
        console.error("Error in /employee/add:", error);
        res.status(500).json({ success: false, message: error.message });
    }
});


// Get All Employees
router.get("/employee/", async (req, res) => {
    try {
        const result = await employeeController.getAllEmployees();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Delete Employee
router.delete("/employee/delete/:employee_id", async (req, res) => {
    try {
        const result = await employeeController.deleteEmployee(req.params.employee_id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
