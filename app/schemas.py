from pydantic import BaseModel, EmailStr
from datetime import datetime

class User_Create_Login(BaseModel):
    email:EmailStr
    password:str