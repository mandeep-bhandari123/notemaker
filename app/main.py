from fastapi import FastAPI
from . import models

from .database import engine

from .routers import users, auth , summarize

app= FastAPI()


app.include_router(users.router)
app.include_router(auth.router)
app.include_router(summarize.router)