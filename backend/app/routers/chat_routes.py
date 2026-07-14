from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import traceback

from app.langgraph.graph import graph

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    success: bool
    response: str


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    try:

        state = {
            "user_input": request.message,
            "messages": [],
            "hcp_name": None,
            "interaction_type": None,
            "interaction_date": None,
            "interaction_time": None,
            "attendees": None,
            "topics": None,
            "voice_summary": None,
            "materials_shared": None,
            "samples_distributed": None,
            "sentiment": None,
            "outcomes": None,
            "followup_actions": None,
            "ai_response": "",
            "extracted_entities": [],
            "success": False,
            "error": None,
        }

        print("=" * 60)
        print("REQUEST MESSAGE:")
        print(request.message)
        print("=" * 60)

        result = graph.invoke(state)

        print("=" * 60)
        print("GRAPH RESULT:")
        print(result)
        print("=" * 60)
        print("SUCCESS:", result.get("success"))
        print("AI RESPONSE:", result.get("ai_response"))
        print("ERROR:", result.get("error"))
        print("=" * 60)

        return ChatResponse(
            success=bool(result.get("success")),
            response=str(result.get("ai_response") or ""),
        )

    except Exception as e:

        print("=" * 60)
        print("CHAT ROUTE ERROR")
        traceback.print_exc()
        print("ERROR:", str(e))
        print("=" * 60)

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )