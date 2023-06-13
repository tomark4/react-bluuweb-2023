from django.db import models

# Create your models here.

class Todo(models.Model):
  title = models.CharField(max_length=255)
  completed = models.BooleanField(default=False)
  order = models.IntegerField(default=0)
  created_at =  models.DateTimeField(auto_now_add=True,verbose_name="Creado el")
  updated_at = models.DateTimeField(auto_now=True,verbose_name="Acualizado el")

  def __str__(self):
    return self.title

  class Meta:
    ordering = ("order",)