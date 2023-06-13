from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Todo

class TodoViewSet(viewsets.ModelViewSet):
  model = Todo
  serializer_class = TodoSerializer

  def get_queryset(self):
    qs = Todo.objects.all()

    status = self.request.query_params.get('status', None)
    
    if status:
      if status == "completed":
        qs = Todo.objects.filter(completed=True)
        return qs

      if status == "not_completed":
        qs = Todo.objects.filter(completed=False)
        return qs

    return qs

  @action(methods=["DELETE"], detail=False)
  def clear_all_completed(self, request):
    delete_todos = Todo.objects.filter(completed=True)

    if delete_todos:
      delete_todos.delete()
      return Response(status.HTTP_204_NO_CONTENT) 

    return Response({"message": "Nothing to delete"},status.HTTP_200_OK)
  
  @action(methods=["POST"], detail=False)
  def update_order(self, request):
    try:
      if 'todos' not in request.data:
        return Response({"message": "Send todo list to update order"},status.HTTP_400_BAD_REQUEST)

      for i, item in enumerate(request.data['todos']):
        Todo.objects.filter(pk=item).update(order=i+1)
      
      serializer = TodoSerializer(Todo.objects.all(), many=True)
      return Response({"message": "success", "todos":serializer.data},status.HTTP_200_OK)
    except Exception as e:
      return Response({"message": "Bad request","error":str(e)},status.HTTP_400_BAD_REQUEST)
    

