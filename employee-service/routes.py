from fastapi import APIRouter
from controllers import router as employee_router

router = APIRouter()
router.include_router(employee_router)
