from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import viewsets
from .models import Todo


class TodoViewSet(viewsets.ModelViewSet):
  model = Todo
  queryset = Todo.objects.all()
  serializer_class = TodoSerializer