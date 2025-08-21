import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
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

import re

def clean_text(markdown_text: str) -> str:
    # Remove Markdown bold/italic markers
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", markdown_text)  # **bold**
    text = re.sub(r"\*(.*?)\*", r"\1", text)               # *italic*
    
    # Remove headings (###, ##, #)
    text = re.sub(r"#+\s*", "", text)
    
    # Replace multiple newlines with a single space
    text = re.sub(r"\n+", " ", text)
    
    # Remove extra spaces
    text = re.sub(r"\s{2,}", " ", text).strip()
    
    return text


model = ChatGoogleGenerativeAI(model="gemini-2.5-flash")  

    


@router.post('')
def summarize (text:str, db:session=Depends(get_db),current_user: schemas.TokenData = Depends(oauth2.get_current_user)):
    template =[('system', "You are a helpful chat bot whats gices detailed sumarry and notes to the provided text."), ('human', 'Please give me a detailed notes of this {text} ')]
    prompt_template = ChatPromptTemplate.from_messages(template)
    prompt = prompt_template.invoke({"text":text})
    result =model.invoke(prompt)
    output = result.content
    output = clean_text(output)
    return output
     




