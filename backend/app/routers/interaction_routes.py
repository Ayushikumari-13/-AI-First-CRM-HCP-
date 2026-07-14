from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.interaction_schema import (
    InteractionCreate,
    InteractionUpdate,
    InteractionResponse,
)

from app.services.interaction_service import (
    create_interaction,
    get_all_interactions,
    get_interaction,
    update_interaction,
    delete_interaction,
)

router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"],
)


@router.get(
    "/",
    response_model=List[InteractionResponse],
)
def read_all(db: Session = Depends(get_db)):
    return get_all_interactions(db)


@router.get(
    "/{interaction_id}",
    response_model=InteractionResponse,
)
def read_one(
    interaction_id: int,
    db: Session = Depends(get_db),
):

    interaction = get_interaction(
        db,
        interaction_id,
    )

    if not interaction:
        raise HTTPException(
            status_code=404,
            detail="Interaction Not Found",
        )

    return interaction


@router.post(
    "/",
    response_model=InteractionResponse,
)
def create(
    interaction: InteractionCreate,
    db: Session = Depends(get_db),
):
    return create_interaction(
        db,
        interaction,
    )


@router.put(
    "/{interaction_id}",
    response_model=InteractionResponse,
)
def update(
    interaction_id: int,
    interaction: InteractionUpdate,
    db: Session = Depends(get_db),
):

    updated = update_interaction(
        db,
        interaction_id,
        interaction,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Interaction Not Found",
        )

    return updated


@router.delete("/{interaction_id}")
def delete(
    interaction_id: int,
    db: Session = Depends(get_db),
):

    deleted = delete_interaction(
        db,
        interaction_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Interaction Not Found",
        )

    return deleted