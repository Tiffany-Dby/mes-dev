from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from users.src.services.UserService import UserService
from utils.hashpass import isValidPassword

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        firstName = request.data.get("firstName")
        lastName = request.data.get("lastName")
        email = request.data.get("email")
        password = request.data.get("password")

        if not firstName or not lastName or not email or not password:
            return Response({"error": "Tous les champs sont requis"}, status=400)

        if UserService.getByEmail(email):
            return Response({"error": "Cet email est déjà utilisé"}, status=400)

        if not isValidPassword(password):
            user = UserService.add(firstName, lastName, email, password)
            if not user:
                return Response({"error": "Une erreur est survenue"}, status=500)
            return Response({"message": "Utilisateur créé avec succès"}, status=201)
        else:
            return Response({"Le mot de passe ne respecte pas les règles"}, status=400)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = UserService.getByEmail(email)
            if user:
                if UserService.checkPassword(user.id, password):
                    refresh = RefreshToken.for_user(user)
                    return Response({
                        "access": str(refresh.access_token),
                        "refresh": str(refresh)
                    }, status=200)
            
        except Exception as e:
            print(f"Erreur lors de la connexion : {e}")  # Log du serveur
            return Response({"error": "Identifiants invalides"}, status=400)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Déconnexion réussie"}, status=200)
        except Exception:
            return Response({"error": "Token invalide"}, status=400)
