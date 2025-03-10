from users.src.data.repositories.UserRepo import UserRepo
from users.src.data.models.User import User
from typing import Optional, List

class UserService:

    @staticmethod
    def add(firstName: str, lastName: str, email: str, isAdmin: bool, password: str) -> Optional[User]:
        return UserRepo.add(firstName, lastName, email, isAdmin, password)

    @staticmethod
    def get(id: int) -> Optional[User]:
        return UserRepo.get(id)

    @staticmethod
    def getByEmail(email: str) -> Optional[User]:
        return UserRepo.getByEmail(email)

    @staticmethod
    def getAll() -> Optional[List[User]]:
        return UserRepo.getAll()

    @staticmethod
    def getAllByAdmin() -> Optional[List[User]]:
        return UserRepo.getAllByAdmin()

    @staticmethod
    def update(id: int, firstName: str, lastName: str, email: str) -> Optional[User]:
        return UserRepo.update(id, firstName, lastName, email)

    @staticmethod
    def updatePassword(id: int, password: str) -> Optional[User]:
        return UserRepo.updatePassword(id, password)

    @staticmethod
    def delete(id: int) -> bool:
        return UserRepo.delete(id)

    @staticmethod
    def checkPassword(id: int, password: str) -> Optional[User]:
        return UserRepo.checkPassword(id, password)
