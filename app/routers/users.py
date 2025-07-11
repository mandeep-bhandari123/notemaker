from .. import models , schemas , utils,oauth2
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


@router.get('/{email}',response_model=schemas.UserOut)
def get_user(email:str, db:session=Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == email).first()
    print(user.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"user with id{id} not found")
    return user
    
@router.delete('/{email}',response_model=schemas.User_Create_Login,status_code=status.HTTP_410_GONE)
def delete_user(email:str,password:str, db:session=Depends(get_db),current_user: schemas.TokenData = Depends(oauth2.get_current_user)):
    if current_user.email != email:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You cannot delete another user's account"
        )
    user= db.query(models.User).filter(models.User.email== email).first()
    
    
    if not user :
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"User with email {email} not found")
    
    print(utils.verify(password,user.password))
    if utils.verify(password,user.password)==True:
        db.delete(user)
        db.commit()
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Invalide email or password")
    j=''
    for i in password:
        j=j+"*"
    return {"email":f"{user.email}",
            "password":f"{j}"}
