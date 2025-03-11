from typing import Optional, List
from users.src.services.UserService import UserService
from users.src.data.models.User import User
from utils.hashpass import isValidPassword

class UsersControl:

    @staticmethod
    def get(id: int) -> Optional[User]:
        return UserService.get(id)

    @staticmethod
    def getByEmail(email: str) -> Optional[User]:
        return UserService.getByEmail(email)

    @staticmethod
    def getAll() -> List[User]:
        return UserService.getAll()

    @staticmethod
    def update(id: int, firstName: str, lastName: str, email: str) -> Optional[User]:
        return UserService.update(id, firstName, lastName, email)

    @staticmethod
    def updatePassword(id: int, password: str) -> Optional[User]:
        if not isValidPassword(password):
            return "Invalid password"
        return UserService.updatePassword(id, password)

    @staticmethod
    def delete(id: int) -> bool:
        return UserService.delete(id)
