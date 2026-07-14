from sqlalchemy.orm import Session

from app.models.interaction import Interaction


class LogInteractionTool:
    """
    Tool to save a new HCP interaction
    into the database.
    """

    def execute(
        self,
        db: Session,
        hcp_name: str,
        interaction_type: str,
        date: str,
        time: str,
        attendees: str = "",
        topics: str = "",
        voice_summary: str = "",
        materials: str = "",
        samples: str = "",
        sentiment: str = "",
        outcomes: str = "",
        followup: str = "",
    ):

        try:

            interaction = Interaction(
                hcp_name=hcp_name,
                interaction_type=interaction_type,
                date=date,
                time=time,
                attendees=attendees,
                topics=topics,
                voice_summary=voice_summary,
                materials=materials,
                samples=samples,
                sentiment=sentiment,
                outcomes=outcomes,
                followup=followup,
            )

            db.add(interaction)

            db.commit()

            db.refresh(interaction)

            return {
                "success": True,
                "message": "Interaction logged successfully.",
                "data": {
                    "id": interaction.id,
                    "hcp_name": interaction.hcp_name,
                    "interaction_type": interaction.interaction_type,
                    "date": interaction.date,
                    "time": interaction.time,
                    "attendees": interaction.attendees,
                    "topics": interaction.topics,
                    "voice_summary": interaction.voice_summary,
                    "materials": interaction.materials,
                    "samples": interaction.samples,
                    "sentiment": interaction.sentiment,
                    "outcomes": interaction.outcomes,
                    "followup": interaction.followup,
                },
            }

        except Exception as e:

            db.rollback()

            return {
                "success": False,
                "message": "Failed to log interaction.",
                "error": str(e),
            }


log_interaction_tool = LogInteractionTool()