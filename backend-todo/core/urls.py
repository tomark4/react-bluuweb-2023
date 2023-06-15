from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from todos.urls import router as todos_router
from users.urls import router as users_router
from .custom_router import CustomRouter
from rest_framework_simplejwt import views as jwt_views

schema_view = get_schema_view(
   openapi.Info(
      title="TODO api",
      default_version='v1',
      description="TODO api blog",
      terms_of_service="https://jottasistemas.com/terms/policies",
      contact=openapi.Contact(email="contact@jotta.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
)

main_router = CustomRouter()
main_router.extend(todos_router)
main_router.extend(users_router)

urlpatterns = [
   path('admin/', admin.site.urls),
   path('api/v1/', include(main_router.urls)),
   path('api/v1/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('api/v1/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
   path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redocs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
