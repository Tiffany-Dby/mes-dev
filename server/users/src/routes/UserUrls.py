from ninja import Router, ModelSchema, Schema
from typing import Optional, List
from users.src.controllers.UserControl import UsersControl
from users.src.data.models.User import User

router = Router()

class UserSchema(ModelSchema):
    class Meta:
        model = User
        fields = "__all__"

class UpdateSchema(Schema):
    id: int
    firstName: str
    lastName: str
    email: str

class UpdatePasswordSchema(Schema):
    id: int
    password: str


@router.get("/get/{id}")
def get(request, id: int) -> Optional[User]:
    return UsersControl.get(id)

@router.post("/getByEmail/{email}")
def getByEmail(request, email: str) -> Optional[User]:
    return UsersControl.getByEmail(email)

# @router.get("/getAll")
# def getAll(request) -> Optional[List[User]]:
#     return UsersControl.getAll()

@router.put("/update")
def update(request, data: UpdateSchema) -> Optional[User]:
    return UsersControl.update(data.id, data.firstName, data.lastName, data.email)

@router.put("/updatePassword")
def updatePassword(request, data: UpdatePasswordSchema) -> Optional[User]:
    return UsersControl.updatePassword(data.id, data.password)

@router.delete("/delete/{id}")
def delete(request, id: int) -> bool:
    return UsersControl.delete(id)
