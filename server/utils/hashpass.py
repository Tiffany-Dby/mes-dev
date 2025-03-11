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
