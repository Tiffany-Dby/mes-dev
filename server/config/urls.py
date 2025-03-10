from django.urls import path, include
from users.src.routes.AuthUrls import auth_patterns

urlpatterns = [
    path("api/auth/", include(auth_patterns)),
]
