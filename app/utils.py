from passlib.context import CryptContext

pwt_content = CryptContext(schemes=['bcrypt'],deprecated="auto")

def hash(password:str):
    return pwt_content.hash(password)

