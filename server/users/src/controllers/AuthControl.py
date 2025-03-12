from rest_framework_simplejwt.tokens import RefreshToken
from users.src.services.UserService import UserService
from utils.checkInfos import CheckInfos
from ninja.errors import HttpError


class AuthControl:

    @staticmethod
    def register(data):
        if not CheckInfos.isValideString(data.firstName) or not CheckInfos.isValideString(data.lastName):
            raise  HttpError(500, "firstName or lastName invalid")
        
        if data.password != data.confirmPassword:
            raise  HttpError(500, "passwords don't match")
        
        if not CheckInfos.isEmail(data.email):
            raise HttpError(500, "Invalid email")

        if not CheckInfos.isValidPassword(data.password):
            raise HttpError(500, "password invalid")

        if UserService.getByEmail(data.email):
            raise HttpError(500, "email already exists")

        user = UserService.add(data.firstName, data.lastName, data.email, data.password)
        if not user:
            raise HttpError(500, "An error occurred while creating the user")

        return "User created successfully"

    @staticmethod
    def login(data):
        user = UserService.getByEmail(data.email)
        if user and UserService.checkPassword(user.id, data.password):
            refresh = RefreshToken.for_user(user)
            return {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": user.to_json(),
            }
        raise HttpError(500, "email or password invalid")

    @staticmethod
    def logout(data):
        try:
            token = RefreshToken(data.refresh)
            token.blacklist()
            return "logout successful"
        except Exception:
            raise HttpError(500, "invalid token")
