import json
from fastapi import APIRouter , Depends , status , HTTPException , Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from .. import database , schemas  ,models , utils , oauth2

router = APIRouter(tags=['Authentication'])
@router.post('/login',response_model=schemas.Token)
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(database.get_db)):

    user = db.query(models.User).filter(models.User.email == user_credentials.username ).first()
    if not user :
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="Invalid Info")
    if not utils.verify(user_credentials.password,user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="Invalid Info")
    access_token=oauth2.create_access_token(data={"sub":user.email})
    print("Sucessfull")
    return Response(
    content=json.dumps({'access_token': access_token, 'token_type': 'bearer'}),
    status_code=status.HTTP_200_OK,
    media_type="application/json"
)