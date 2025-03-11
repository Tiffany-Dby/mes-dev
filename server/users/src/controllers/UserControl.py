from typing import Optional, List
from users.src.services.UserService import UserService
from users.src.data.models.User import User
from utils.checkInfos import CheckInfos

class UsersControl:

    @staticmethod
    def get(id: int) -> Optional[User]:
        return UserService.get(id)

    @staticmethod
    def getByEmail(email: str) -> Optional[User]:
        if not CheckInfos.isEmail(email):
            return "Invalid email"
        return UserService.getByEmail(email)

    @staticmethod
    def getAll() -> List[User]:
        return UserService.getAll()

    @staticmethod
    def update(data) -> Optional[User]:
        if not CheckInfos.isValideId(data.id):
            return "Invalid id"
        if not CheckInfos.isValideString(data.firstName):
            return "Invalid firstName"
        if not CheckInfos.isValideString(data.lastName):
            return "Invalid lastName"
        if not CheckInfos.isEmail(data.email):
            return "Invalid email"
        return UserService.update(data.id, data.firstName, data.lastName, data.email)

    @staticmethod
    def updatePassword(data) -> Optional[User]:
        if not CheckInfos.isValideId(data.id) or not CheckInfos.isValidPassword(data.password):
            return "Invalid password"
        return UserService.updatePassword(data.id, data.password)

    @staticmethod
    def delete(id: int) -> bool:
        return UserService.delete(id)
