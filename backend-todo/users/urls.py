from .views import UsersViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register(prefix="users", viewset=UsersViewSet, basename='users')

urlpatterns = [
  path('', include(router.urls))
]
