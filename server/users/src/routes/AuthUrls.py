from ninja import Router, Schema
from users.src.controllers.AuthControl import AuthControl
from ninja_jwt.authentication import JWTAuth

router = Router()


class RegisterSchema(Schema):
    firstName: str
    lastName: str
    email: str
    password: str
    confirmPassword: str


class LoginSchema(Schema):
    email: str
    password: str


class LogoutSchema(Schema):
    refresh: str


@router.post("/register")
def register(request, data: RegisterSchema):
    return AuthControl.register(data)


@router.post("/login")
def login(request, data: LoginSchema):
    return AuthControl.login(data)


@router.post("/logout", auth=JWTAuth())
def logout(request, data: LogoutSchema):
    return AuthControl.logout(data)
