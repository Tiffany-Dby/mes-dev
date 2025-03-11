import bcrypt
import re

def genSalt():
    return bcrypt.gensalt()

def encrypt(password, salt):
    password = password.encode("utf-8")
    return bcrypt.hashpw(password, salt)

def checkPass(password, salt, hashedPass):
    password = encrypt(password, salt)
    if password == hashedPass:
        return True
    else:
        return False

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
