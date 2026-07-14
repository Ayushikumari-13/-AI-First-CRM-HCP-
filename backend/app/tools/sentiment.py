from app.services.groq_service import groq_service


class SentimentTool:
    """
    AI Tool to analyze sentiment
    from an HCP interaction.
    """

    def execute(self, text: str):

        prompt = f"""
You are an AI Healthcare CRM Assistant.

Analyze the sentiment of the following HCP interaction.

Interaction:
{text}

Instructions:

- Classify only one sentiment.
- Choose one:
    • Positive
    • Neutral
    • Negative

Return your response in this JSON format:

{{
    "sentiment": "Positive",
    "reason": "Short explanation"
}}
"""

        try:

            response = groq_service.generate_response(prompt)

            return {
                "success": True,
                "result": response,
            }

        except Exception as e:

            return {
                "success": False,
                "result": None,
                "error": str(e),
            }


sentiment_tool = SentimentTool() 