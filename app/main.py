from fastapi import FastAPI
from . import models

from .database import engine

from .routers import users, auth , summarize

app= FastAPI()

# In main.py
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                   "http://127.0.0.1:8000"],  # 👈 your React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router)
app.include_router(auth.router)
app.include_router(summarize.router)