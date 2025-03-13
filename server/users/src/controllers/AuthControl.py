from rest_framework_simplejwt.tokens import RefreshToken
from users.src.services.UserService import UserService
from utils.checkInfos import CheckInfos
from ninja.errors import HttpError


class AuthControl:

    @staticmethod
    def register(data):
        if not CheckInfos.is_valid_string(
            data.firstName
        ) or not CheckInfos.is_valid_string(data.lastName):
            raise HttpError(400, "firstName or lastName invalid")

        if data.password != data.confirmPassword:
            raise HttpError(400, "passwords don't match")

        if not CheckInfos.is_email(data.email):
            raise HttpError(400, "Invalid email")

        if not CheckInfos.is_valid_password(data.password):
            raise HttpError(400, "password invalid")

        if UserService.get_by_email(data.email):
            raise HttpError(409, "email already exists")

        user = UserService.add(data.firstName, data.lastName, data.email, data.password)
        if not user:
            raise HttpError(500, "An error occurred while creating the user")

        return "User created successfully"

    @staticmethod
    def login(data):
        user = UserService.get_by_email(data.email)
        if user and UserService.check_password(user.id, data.password):
            refresh = RefreshToken.for_user(user)
            return {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": user.to_json(),
            }
        raise HttpError(401, "email or password invalid")
