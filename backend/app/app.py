from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Routers
from app.routers.health_routes import router as health_router
from app.routers.chat_routes import router as chat_router
from app.routers.interaction_routes import router as interaction_router

app = FastAPI(
    title="AI-First CRM HCP Backend",
    description="Backend API for AI-First CRM HCP Assignment",
    version="1.0.0",
)

# CORS
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root API
@app.get("/")
def root():
    return {
        "message": "🚀 AI-First CRM HCP Backend is Running Successfully"
    }


# Register Routers
app.include_router(
    health_router,
    prefix="/api",
    tags=["Health"],
)

app.include_router(
    interaction_router,
)

app.include_router(
    chat_router,
)