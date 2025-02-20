from fastapi import APIRouter, HTTPException
from models import EmployeeSchema
from bson import ObjectId
from database import db

router = APIRouter()

# Add Employee
@router.post("/add")
async def add_employee(employee: EmployeeSchema):
    employee_dict = employee.dict()
    result = await db.employees.insert_one(employee_dict)
    employee_dict["_id"] = str(result.inserted_id)  # Convert ObjectId to string
    return {"success": True, "message": employee_dict}

# Get All Employees
@router.get("/")
async def get_all_employees():
    employees = await db.employees.find().to_list(100)
    for emp in employees:
        emp["_id"] = str(emp["_id"])  # Convert ObjectId to string
    return {"success": True, "message": employees}

# Delete Employee
@router.delete("/delete/{employeeId}")
async def delete_employee(employeeId: str):
    result = await db.employees.find_one_and_delete({"_id": ObjectId(employeeId)})
    if result:
        result["_id"] = str(result["_id"])
        return {"success": True, "message": result}
    raise HTTPException(status_code=404, detail="Employee not found")
