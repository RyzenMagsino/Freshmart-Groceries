from pydantic import BaseModel, EmailStr
from datetime import date
from typing import Dict

class EmergencyContact(BaseModel):
    name: str
    phone: str
    relationship: str

class EmployeeSchema(BaseModel):
    full_name: str
    date_of_birth: date
    address: str
    contact_number: Dict[str, str]  # Example: {"phone": "09123456789", "email": "test@example.com"}
    emergency_contact: EmergencyContact
