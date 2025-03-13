from typing import Optional, List
from users.src.services.UserService import UserService
from users.src.data.models.User import User
from utils.checkInfos import CheckInfos
from ninja.errors import HttpError


class UsersControl:

    @staticmethod
    def get(id: int) -> Optional[User]:
        user = UserService.get(id)
        if not user:
            raise HttpError(404, "User not found")
        return user.to_json()

    @staticmethod
    def get_by_email(email: str) -> Optional[User]:
        if not CheckInfos.is_email(email):
            raise HttpError(400, "Invalid email")
        user = UserService.get_by_email(email)
        return user.to_json() if user else HttpError(404, "User not found")

    @staticmethod
    def update(data) -> Optional[User]:
        if not CheckInfos.is_valid_id(data.id):
            raise HttpError(400, "Invalid id")
        if not CheckInfos.is_valid_string(data.firstName):
            raise HttpError(400, "Invalid firstName")
        if not CheckInfos.is_valid_string(data.lastName):
            raise HttpError(400, "Invalid lastName")
        if not CheckInfos.is_email(data.email):
            raise HttpError(400, "Invalid email")
        user = UserService.update(data.id, data.firstName, data.lastName, data.email)
        return user.to_json() if user else HttpError(500, "An error occurred")

    @staticmethod
    def update_password(data) -> Optional[User]:
        if not CheckInfos.is_valid_id(data.id) or not CheckInfos.is_valid_password(
            data.password
        ):
            raise HttpError(400, "Invalid password")
        user = UserService.update_password(data.id, data.password)
        return user.to_json() if user else HttpError(500, "An error occurred")

    @staticmethod
    def delete(id: int) -> bool:
        return UserService.delete(id)
