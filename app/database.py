#connecting to the databse
from sqlalchemy import create_engine 
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from fastapi import status , HTTPException
import os 

load_dotenv(dotenv_path=r"C:\Users\nishc\project\notemaker\app\.env")
SQLALCHAMY_DATABASE_URL = os.getenv("DATABASE_URL")

if not SQLALCHAMY_DATABASE_URL :
    raise HTTPException(status_code=status.HTTP_204_NO_CONTENT,detail="Database is not Connected")

engine = create_engine(SQLALCHAMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit= False , autoflush= False , bind= engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try :
        yield db
    finally:
        db.close()
        