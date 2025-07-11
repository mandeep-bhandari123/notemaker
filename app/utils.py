from passlib.context import CryptContext

pwt_content = CryptContext(schemes=['bcrypt'],deprecated="auto")

def hash(password:str):
    return pwt_content.hash(password)

def verify(given_password, real_password):
    return pwt_content.verify(given_password, real_password)
    
    
