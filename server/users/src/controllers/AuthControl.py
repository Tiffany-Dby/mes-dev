from rest_framework_simplejwt.tokens import RefreshToken
from users.src.services.UserService import UserService
from utils.checkInfos import CheckInfos


class AuthControl:

    @staticmethod
    def register(data):
        if not CheckInfos.isValideString(data.firstName) or not CheckInfos.isValideString(data.lastName):
            return {"error: firstName or lastName invalid", 400}

        if not CheckInfos.isValidPassword(data.password):
            return {"error: password doesn't respect the rules", 400}

        if UserService.getByEmail(data.email):
            return {"error: Cet email est déjà utilisé", 400}

        user = UserService.add(data.firstName, data.lastName, data.email, data.password)
        if not user:
            return {"error: Une erreur est survenue", 500}

        return {"message: Utilisateur créé avec succès", 201}

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
        return {"error: Identifiants invalides", 400}

    @staticmethod
    def logout(data):
        try:
            token = RefreshToken(data.refresh)
            token.blacklist()
            return {"message": "Déconnexion réussie"}
        except Exception:
            return {"error": "Token invalide"}, 400
