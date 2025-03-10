import os
import motor.motor_asyncio
from fastapi import FastAPI
from dotenv import load_dotenv
from routes import router

# Load environment variables
load_dotenv()

app = FastAPI()

# MongoDB Connection
MONGO_URI = os.getenv("MONGO_URI")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client.get_database("employee")  # Specify database name

# Register routes
app.include_router(router, prefix="/employee")

@app.get("/")
def home():
    return {"message": "Employee Service is running!"}

# Run the server with the correct port
if __name__ == "__main__":
    import uvicorn
    PORT = int(os.getenv("PORT", 5000))  # Default to 5000 if not set
    uvicorn.run(app, host="0.0.0.0", port=PORT, reload=True)
