from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AutorViewSet, MangaViewSet, ResenaViewSet, UserViewSet, EstadoMangaUsuarioViewSet, SuscripcionViewSet

router = DefaultRouter()

router.register('autor', AutorViewSet)
router.register('manga', MangaViewSet)
router.register('resena', ResenaViewSet)
router.register('users', UserViewSet)
router.register('estado', EstadoMangaUsuarioViewSet)
router.register('suscripcion', SuscripcionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]