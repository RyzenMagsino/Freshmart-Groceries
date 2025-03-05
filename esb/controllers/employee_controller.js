const axios = require("axios");
require("dotenv").config();

class EmployeeController {
    async addEmployee(employeeData) {
        try {
            const response = await axios.post(`${process.env.EMPLOYEE_SERVICE_URL}/employee/add`, employeeData);
            return response.data;
        } catch (error) {
            console.error("Error adding employee:", error);
            return { success: false, message: error.message };
        }
    }

    async getAllEmployees() {
        try {
            const response = await axios.get(`${process.env.EMPLOYEE_SERVICE_URL}/employee/`);
            return response.data;
        } catch (error) {
            console.error("Error getting employees:", error);
            return { success: false, message: error.message };
        }
    }

    async deleteEmployee(employeeId) {
        try {
            const response = await axios.delete(`${process.env.EMPLOYEE_SERVICE_URL}/employee/delete/${employeeId}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting employee:", error);
            return { success: false, message: error.message };
        }
    }
}

module.exports = EmployeeController;
