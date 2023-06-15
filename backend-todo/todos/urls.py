from .views import TodoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(prefix="todos", viewset=TodoViewSet, basename='todos')

urlpatterns = []

urlpatterns += router.urls