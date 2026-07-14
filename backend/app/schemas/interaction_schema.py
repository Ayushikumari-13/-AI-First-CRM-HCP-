from pydantic import BaseModel
from typing import Optional


class InteractionBase(BaseModel):
    hcp_name: str
    interaction_type: str
    date: str
    time: str
    attendees: Optional[str] = None
    topics: Optional[str] = None
    voice_summary: Optional[str] = None
    materials: Optional[str] = None
    samples: Optional[str] = None
    sentiment: Optional[str] = None
    outcomes: Optional[str] = None
    followup: Optional[str] = None


class InteractionCreate(InteractionBase):
    pass


class InteractionUpdate(InteractionBase):
    pass


class InteractionResponse(InteractionBase):
    id: int

    class Config:
        from_attributes = True