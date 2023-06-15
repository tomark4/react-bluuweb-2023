from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User

class UsersViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  model = User
  serializer_class = UserSerializer
