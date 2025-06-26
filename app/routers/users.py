from .. import models , schemas
from sqlalchemy.orm import session
from fastapi import FastAPI , Response , status , HTTPException , Depends , APIRouter
from ..database import get_db

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.post('/',status_code=status.HTTP_201_CREATED,response_model=schemas.User_Create_Login)
def create_user(user:schemas.User_Create_Login, db:session=Depends(get_db)):
    
    new_user=models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return user