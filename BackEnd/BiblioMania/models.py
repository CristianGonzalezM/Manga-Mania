from django.db import models
from django.contrib.auth.models import User

class Autor(models.Model):
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
    ]

    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    def __str__(self):
        return f'{self.name}'

class Manga(models.Model):
    STATUS_CHOICES = [
        ('E', 'En emisión'),
        ('F', 'Finalizado'),
    ]

    title = models.CharField(max_length=100)
    author = models.ForeignKey(Autor, on_delete=models.CASCADE)
    publication_date = models.DateField()
    description = models.TextField()
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)

    def __str__(self):
        return f'{self.title} by {self.author} - {self.status}'

class Resena(models.Model):
    STAR_CHOICES = [
        ('1', '1 estrella'),
        ('2', '2 estrellas'),
        ('3', '3 estrellas'),
        ('4', '4 estrellas'),
        ('5', '5 estrellas'),
    ]
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE, related_name='resenas')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.CharField(max_length=1, choices=STAR_CHOICES)
    comment = models.TextField()
    review_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'Reseña de {self.user.username} del Manga {self.manga.title} con una puntuación de {self.STAR_CHOICES()}'
    
class EstadoMangaUsuario(models.Model):
    ESTADO_CHOICES = [
        ('V', 'Viendo'),
        ('C', 'Considerando'),
        ('T', 'Completado'),
        ('N', 'Ninguno'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    estado = models.CharField(max_length=1, choices=ESTADO_CHOICES)

    def __str__(self):
        return f'{self.user.username} - {self.manga.title}: {self.estado}'
    
class Suscripcion(models.Model):
    TIPO_SUSCRIPCION_CHOICES = [
        ('M', 'Mensual'),
        ('S', 'Semestral'),
        ('A', 'Anual'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tipo_suscripcion = models.CharField(max_length=1, choices=TIPO_SUSCRIPCION_CHOICES)
    suscription_date = models.DateField(auto_now_add=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.user.username} - {self.tipo_suscripcion}'

    def save(self, *args, **kwargs):
        if self.tipo_suscripcion == 'M':
            self.precio = 10  # Precio mensual
        elif self.tipo_suscripcion == 'S':
            self.precio = 30  # Precio semestral
        elif self.tipo_suscripcion == 'A':
            self.precio = 60  # Precio anual

        super().save(*args, **kwargs)