from app.database.database import engine
from app.database.base import Base

# Import all models here
from app.models.interaction import Interaction


def init_db():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    init_db()
    print("✅ Database Initialized Successfully")