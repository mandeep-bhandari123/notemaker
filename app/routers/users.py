from .. import models , schemas , utils
from sqlalchemy.orm import session
from fastapi import FastAPI , Response , status , HTTPException , Depends , APIRouter
from ..database import get_db

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.post('/',status_code=status.HTTP_201_CREATED,response_model=schemas.User_Create_Login)
def create_user(user:schemas.User_Create_Login, db:session=Depends(get_db)):
    
    exesting_user = db.query(models.User).filter(models.User.email == user.email).first()
    
    if exesting_user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,detail=f"User with {user.email} is already resistered")
    
    hashed_password=utils.hash(user.password)
    user.password = hashed_password
    new_user=models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return user