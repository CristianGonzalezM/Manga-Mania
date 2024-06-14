from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MangaViewSet, ResenaViewSet, UserViewSet

router = DefaultRouter()

router.register('manga', MangaViewSet)
router.register('resena', ResenaViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]