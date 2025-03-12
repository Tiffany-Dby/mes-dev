from typing import Optional, List
from users.src.services.UserService import UserService
from users.src.data.models.User import User
from utils.checkInfos import CheckInfos
from ninja.errors import HttpError

class UsersControl:

    @staticmethod
    def get(id: int) -> Optional[User]:
        return UserService.get(id)

    @staticmethod
    def getByEmail(email: str) -> Optional[User]:
        if not CheckInfos.isEmail(email):
            raise HttpError(500, "Invalid email")
        return UserService.getByEmail(email)

    @staticmethod
    def getAll() -> List[User]:
        return UserService.getAll()

    @staticmethod
    def update(data) -> Optional[User]:
        if not CheckInfos.isValideId(data.id):
            raise HttpError(500, "Invalid id")
        if not CheckInfos.isValideString(data.firstName):
            raise HttpError(500, "Invalid firstName")
        if not CheckInfos.isValideString(data.lastName):
            raise HttpError(500, "Invalid lastName")
        if not CheckInfos.isEmail(data.email):
            raise HttpError(500, "Invalid email")
        return UserService.update(data.id, data.firstName, data.lastName, data.email)

    @staticmethod
    def updatePassword(data) -> Optional[User]:
        if not CheckInfos.isValideId(data.id) or not CheckInfos.isValidPassword(data.password):
            raise HttpError(500, "Invalid password")
        return UserService.updatePassword(data.id, data.password)

    @staticmethod
    def delete(id: int) -> bool:
        return UserService.delete(id)
