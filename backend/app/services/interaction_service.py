from sqlalchemy.orm import Session

from app.models.interaction import Interaction
from app.schemas.interaction_schema import (
    InteractionCreate,
    InteractionUpdate,
)


def get_all_interactions(db: Session):
    return db.query(Interaction).all()


def get_interaction(db: Session, interaction_id: int):
    return (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )


def create_interaction(
    db: Session,
    interaction: InteractionCreate,
):
    new_interaction = Interaction(**interaction.model_dump())

    db.add(new_interaction)

    db.commit()

    db.refresh(new_interaction)

    return new_interaction


def update_interaction(
    db: Session,
    interaction_id: int,
    interaction: InteractionUpdate,
):

    db_interaction = get_interaction(
        db,
        interaction_id,
    )

    if not db_interaction:
        return None

    update_data = interaction.model_dump()

    for key, value in update_data.items():
        setattr(db_interaction, key, value)

    db.commit()

    db.refresh(db_interaction)

    return db_interaction


def delete_interaction(
    db: Session,
    interaction_id: int,
):

    db_interaction = get_interaction(
        db,
        interaction_id,
    )

    if not db_interaction:
        return None

    db.delete(db_interaction)

    db.commit()

    return {
        "message": "Interaction Deleted Successfully"
    }