from app.services.groq_service import groq_service


class SummarizeTool:
    """
    AI Tool to summarize
    HCP interactions and voice notes.
    """

    def execute(self, text: str):

        prompt = f"""
You are an AI CRM Assistant for Healthcare Professionals.

Summarize the following HCP interaction.

Interaction:

{text}

Instructions:

1. Keep summary within 100 words.
2. Mention important discussion.
3. Mention medicines/products if available.
4. Mention doctor's interest.
5. Mention next action if available.

Return only the summary.
"""

        try:

            response = groq_service.generate_response(prompt)

            return {
                "success": True,
                "summary": response,
            }

        except Exception as e:

            return {
                "success": False,
                "summary": None,
                "error": str(e),
            }


summarize_tool = SummarizeTool()