from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import (
  UserView, 
  UserRegisterView
)

urlpatterns = [
  path("users/me/",UserView.as_view(), name="get_user"),
  path("users/register/",UserRegisterView.as_view(), name="register_user"),
]
