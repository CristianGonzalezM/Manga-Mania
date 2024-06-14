from rest_framework import viewsets
from .models import Manga, Resena
from django.contrib.auth.models import  User
from .serializers import MangaSerializer, ResenaSerializer, UserSerializer

# Create your views here.
class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class ResenaViewSet(viewsets.ModelViewSet):
    queryset = Resena.objects.all()
    serializer_class = ResenaSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer