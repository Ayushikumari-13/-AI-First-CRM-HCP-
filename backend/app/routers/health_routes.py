from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "application": "AI-First CRM HCP Backend",
        "version": "1.0.0",
        "message": "Backend is running successfully 🚀",
    }