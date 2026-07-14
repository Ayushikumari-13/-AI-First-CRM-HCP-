from app.services.groq_service import groq_service


class FollowupTool:
    """
    AI Tool to generate follow-up actions
    after an HCP interaction.
    """

    def execute(
        self,
        hcp_name: str,
        interaction_type: str,
        topics: str,
        outcomes: str,
    ):

        prompt = f"""
You are an AI CRM Assistant.

Generate professional follow-up actions for the following HCP interaction.

HCP Name:
{hcp_name}

Interaction Type:
{interaction_type}

Topics Discussed:
{topics}

Outcomes:
{outcomes}

Instructions:

- Give 5 follow-up action items.
- Keep them short.
- Use bullet points.
- Professional healthcare language only.
"""

        try:

            response = groq_service.generate_response(prompt)

            return {
                "success": True,
                "followup": response,
            }

        except Exception as e:

            return {
                "success": False,
                "followup": None,
                "error": str(e),
            }


followup_tool = FollowupTool()