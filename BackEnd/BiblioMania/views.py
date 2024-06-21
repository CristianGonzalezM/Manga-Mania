from rest_framework import viewsets
from .models import Autor, Manga, Resena, EstadoMangaUsuario, Suscripcion
from django.contrib.auth.models import  User
from .serializers import AutorSerializer, MangaSerializer, ResenaSerializer, UserSerializer, EstadoMangaUsuarioSerializer, SuscripcionSerializer

# Create your views here.
class AutorViewSet(viewsets.ModelViewSet):
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer

class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class ResenaViewSet(viewsets.ModelViewSet):
    queryset = Resena.objects.all()
    serializer_class = ResenaSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EstadoMangaUsuarioViewSet(viewsets.ModelViewSet):
    queryset = EstadoMangaUsuario.objects.all()
    serializer_class = EstadoMangaUsuarioSerializer

class SuscripcionViewSet(viewsets.ModelViewSet):
    queryset = Suscripcion.objects.all()
    serializer_class = SuscripcionSerializer