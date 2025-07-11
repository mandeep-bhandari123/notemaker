from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime

class User_Create_Login(BaseModel):
    email:EmailStr
    password:str
    
class UserOut(BaseModel):
    email:EmailStr
    created_at:datetime
    class Config :
        orm_mode=True
        
class Token(BaseModel):
    access_token:str
    token_type:str

class TokenData(BaseModel):
    email:Optional[str]=None