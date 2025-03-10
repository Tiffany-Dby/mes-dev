from django.urls import path
from users.src.controllers.AuthControl import RegisterView, LoginView, LogoutView

# Définition des routes pour l'authentification
auth_patterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
]
