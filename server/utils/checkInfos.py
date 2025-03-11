from pydantic import EmailStr
import re

class CheckInfos():
    
    @staticmethod
    def isEmail(email: str) -> bool:
        try:
            EmailStr(email)
            return True
        except Exception:
            return False

    @staticmethod
    def isValideString(string: str) -> bool:
        if len(string) > 0 and len(string) < 100:
            return True
        else:
            return False
        
    @staticmethod
    def isValideId(id: int) -> bool:
        if id > 0:
            return True
        else:
            return False

    @staticmethod
    def isValidPassword(password: str) -> bool:
        if len(password) < 8:
            return False

        if not re.search(r"\d", password):
            return False

        if not re.search(r"[A-Z]", password):
            return False

        if not re.search(r"[a-z]", password):
            return False

        if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
            return False

        return True
