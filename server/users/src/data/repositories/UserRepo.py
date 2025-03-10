from users.src.data.models.User import User
from users.src.data.models.UserCredential import UserCredential
from utils.bcrypt import genSalt, encrypt

class UserRepo:
    
    @staticmethod
    def add(firstName: str, lastName: str, email: str, isAdmin: bool, password: str) -> User:
        salt = genSalt()
        hashedPass = encrypt(password, salt)
        try:
            user = User.objects.create(firstName=firstName, lastName=lastName, isAdmin=isAdmin, email=email)
            if user:
                cred = UserCredential.objects.create(user=user, salt=salt, password=hashedPass)
                if cred:
                    return user
                else:
                    user.delete()
        except Exception as e:
            print(e)
        
        return None
    
    @staticmethod
    def get(id: int) -> User:
        try:
            user = User.objects.get(id=id)
            if user:
                return user
        except Exception as e:
            print(e)
        
        return None
    
    @staticmethod
    def getByEmail(email: str) -> User:
        try:
            user = User.objects.get(email=email)
            if user:
                return user
        except Exception as e:
            print(e)
        
        return None
    
    @staticmethod
    def getAll() -> list[User]:
        try:
            users = User.objects.all()
            if users:
                return users
        except Exception as e:
            print(e)
        
        return None
    
    @staticmethod
    def getAllByAdmin() -> list[User]:
        try:
            users = User.objects.filter(isAdmin=True)
            if users:
                return users
        except Exception as e:
            print(e)
        
        return None
    
    @staticmethod
    def update(id: int, firstName: str, lastName: str, email: str) -> User:
        try:
            user = User.objects.get(id=id)
            if user:
                user.firstName = firstName
                user.lastName = lastName
                user.email = email
                user.save()
                return user
        except Exception as e:
            print(e)
        
        return None
        
    @staticmethod
    def updatePassword(id: int, password: str) -> User:
        try:
            user = User.objects.get(id=id)
            cred = UserCredential.objects.get(user=user)
            if user and cred:
                cred.password = encrypt(password, cred.salt)
                cred.save()
                return user
        except Exception as e:
            print(e)
        
        return None
        
    @staticmethod
    def delete(id: int) -> bool:
        try:
            user = User.objects.get(id=id)
            if user:
                user.delete()
        except Exception as e:
            print(e)
        finally:
            if not User.objects.filter(id=id).exists():
                return True
            else:
                return False

    @staticmethod
    def checkPassword(id: int, password: str) -> User:
        try:
            user = User.objects.get(id=id)
            if user:
                cred = UserCredential.objects.get(user=user)
                if cred.password == encrypt(password, cred.salt):
                    return user
        except Exception as e:
            print(e)

        return None
