from rest_framework import routers

class CustomRouter(routers.DefaultRouter):
  def extend(self, router):
    self.registry.extend(router.registry)