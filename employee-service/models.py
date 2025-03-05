from pydantic import BaseModel, EmailStr
from datetime import date
from typing import Dict

class ContactInfo(BaseModel):
    phone: str
    email: EmailStr  # Ensures it's a valid email

class EmergencyContact(BaseModel):
    name: str
    phone: str
    relationship: str

class EmployeeSchema(BaseModel):
    full_name: str
    date_of_birth: date
    address: str
    contact_number: ContactInfo  # Use a proper model instead of Dict
    emergency_contact: EmergencyContact
