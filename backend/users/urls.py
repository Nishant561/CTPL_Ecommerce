from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'', UserViewSet)  # '' because we include this under api/users/

urlpatterns = [
    path('', include(router.urls)),
]
