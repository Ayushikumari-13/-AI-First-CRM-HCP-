from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage

from app.config.settings import settings


class GroqService:

    def __init__(self):

        self.llm = ChatGroq(
            api_key=settings.GROQ_API_KEY,
            model="gemma2-9b-it",
            temperature=0.3,
        )

        self.system_prompt = """
You are an AI CRM Assistant for Healthcare Professionals.

Your tasks:

1. Extract HCP Details
2. Summarize Interaction
3. Detect Sentiment
4. Generate Follow-up
5. Return professional responses.
"""

    def generate_response(self, message: str):

        messages = [
            SystemMessage(content=self.system_prompt),
            HumanMessage(content=message),
        ]

        response = self.llm.invoke(messages)

        return response.content


groq_service = GroqService()