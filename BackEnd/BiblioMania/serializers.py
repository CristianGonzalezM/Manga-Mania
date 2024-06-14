from rest_framework import serializers
from .models import Autor, Manga, Resena, EstadoMangaUsuario
from django.contrib.auth.models import User

class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = '__all__'

class MangaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manga
        fields = '__all__'

class ResenaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resena
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['__all__']

class EstadoMangaUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstadoMangaUsuario
        fields = '__all__'