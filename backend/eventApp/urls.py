from django.urls import path, include
from rest_framework import routers
from .views import EventoView

router = routers.DefaultRouter()
router.register(r'eventos', EventoView, 'eventos')

urlpatterns = [
    path("api/", include(router.urls))
]