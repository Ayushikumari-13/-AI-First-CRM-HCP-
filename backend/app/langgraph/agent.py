from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage

from app.config.settings import settings


class CRMAgent:
    """
    AI CRM Agent
    Handles interaction summarization and response generation.
    """

    def __init__(self):
        self.llm = ChatGroq(
            api_key=settings.GROQ_API_KEY,
            model="llama-3.1-8b-instant",
            temperature=0.3,
        )

        self.system_prompt = """
You are an AI CRM Assistant for Healthcare Professionals (HCP).

Your responsibilities:

1. Extract HCP Name
2. Detect Interaction Type
3. Summarize Discussion
4. Identify Materials Shared
5. Detect Sentiment
6. Generate Follow-up Actions

Always return clean and professional responses.
"""

    def summarize_interaction(self, user_input: str):

        messages = [
            SystemMessage(content=self.system_prompt),
            HumanMessage(content=user_input),
        ]

        response = self.llm.invoke(messages)

        return response.content

    def chat(self, message: str):
        return self.summarize_interaction(message)


crm_agent = CRMAgent()