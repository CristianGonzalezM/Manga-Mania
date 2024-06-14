from django.contrib import admin
from .models import Autor, Manga, Resena, EstadoMangaUsuario

admin.site.register(Autor)
admin.site.register(Manga)
admin.site.register(Resena)
admin.site.register(EstadoMangaUsuario)