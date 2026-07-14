from typing import TypedDict, List, Optional


class AgentState(TypedDict):
    """
    LangGraph State
    Shared state between all nodes in the graph.
    """

    # User Input
    user_input: str

    # Chat History
    messages: List[str]

    # HCP Details
    hcp_name: Optional[str]
    interaction_type: Optional[str]
    interaction_date: Optional[str]
    interaction_time: Optional[str]

    attendees: Optional[str]

    # Discussion
    topics: Optional[str]
    voice_summary: Optional[str]

    # Materials
    materials_shared: Optional[str]
    samples_distributed: Optional[str]

    # Sentiment
    sentiment: Optional[str]

    # Outcomes
    outcomes: Optional[str]

    # Follow-up
    followup_actions: Optional[str]

    # AI Output
    ai_response: Optional[str]

    # Extracted Entities
    extracted_entities: List[str]

    # Status
    success: bool

    # Error
    error: Optional[str]