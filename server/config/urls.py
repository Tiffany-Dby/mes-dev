from django.urls import path, include
from ninja import NinjaAPI
from users.src.routes.AuthUrls import auth_patterns
from users.src.routes.UserUrls import router as user_router

api = NinjaAPI()

api.add_router("/users", user_router)

urlpatterns = [
    path("api/auth/", include(auth_patterns)),
    path("api/", api.urls),
]
