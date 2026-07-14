from sqlalchemy.orm import Session

from app.models.interaction import Interaction


class EditInteractionTool:
    """
    Tool to update an existing interaction.
    """

    def execute(
        self,
        db: Session,
        interaction_id: int,
        updated_data: dict,
    ):

        interaction = (
            db.query(Interaction)
            .filter(Interaction.id == interaction_id)
            .first()
        )

        if interaction is None:
            return {
                "success": False,
                "message": "Interaction not found.",
            }

        for key, value in updated_data.items():

            if hasattr(interaction, key):
                setattr(interaction, key, value)

        db.commit()

        db.refresh(interaction)

        return {
            "success": True,
            "message": "Interaction updated successfully.",
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


edit_interaction_tool = EditInteractionTool()