import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain.schema.output_parser import StrOutputParser
from langchain_core.messages import SystemMessage, HumanMessage
from langchain.prompts import ChatPromptTemplate 
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



model = ChatGoogleGenerativeAI(model="gemini-2.5-flash")  

    


@router.post('')
def summarize (text:str, db:session=Depends(get_db),current_user: schemas.TokenData = Depends(oauth2.get_current_user)):
    prompt_template =ChatPromptTemplate.from_messages([('system', "You are a helpful chat bot whats gices detailed sumarry and notes to the provided text."), ('human', 'Please give me a detailed notes of this {text} ')])
    
    
    
    
    chain = prompt_template | model | StrOutputParser()
    
    result =chain.invoke({'text':text})
    
     




