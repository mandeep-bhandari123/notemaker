from fastapi import FastAPI
from . import models

from .database import engine

from .routers import users

app= FastAPI()


app.include_router(users.router)
