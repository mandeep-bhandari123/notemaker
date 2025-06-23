from sqlalchemy.orm import relationship
from .database import Base
from sqlalchemy import TIMESTAMP , Column , ForeignKey , Integer,String, text

class User(Base):
    __tablename__= 'users'
    email= Column(String,primary_key=True, nullable= False )
    password = Column(String, nullable=False)
    created_at= Column(TIMESTAMP(timezone=True),nullable=False, server_default=text("now()"))
    
