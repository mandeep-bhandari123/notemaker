import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain_core.messages import SystemMessage, HumanMessage

from .. import models , schemas , utils ,oauth2
from sqlalchemy.orm import session
from fastapi import status , HTTPException , Depends , APIRouter

from ..database import get_db

router = APIRouter(
    prefix="/summary",
    tags=["Summarization"]
)

load_dotenv()  
text =""

model = ChatGoogleGenerativeAI(model="gemini-2.5-pro")  

    


@router.post('')
def summarize (text:str, db:session=Depends(get_db),current_user: schemas.TokenData = Depends(oauth2.get_current_user)):
    messages = [
    SystemMessage(content="You are an AI-powered web app that makes notes and summarizes text."),
    HumanMessage(content=text+" Make notes and summarize the text")
]
    result =model.invoke(messages)
    return result.content
     




