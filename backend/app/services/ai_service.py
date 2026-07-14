from app.langgraph.graph import graph


class AIService:

    def process_chat(self, message: str):

        state = {
            "user_input": message,
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
            "ai_response": None,
            "extracted_entities": [],
            "success": False,
            "error": None,
        }

        result = graph.invoke(state)

        return result


ai_service = AIService()