from django.db import models

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
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
    description = models.TextField()
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)

    def __str__(self):
        return f'{self.title} by {self.author} - {self.status}'

class Resena(models.Model):
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE, related_name='resenas')
    user = models.CharField(max_length=100)
    rating = models.IntegerField()
    comment = models.TextField()
    review_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'Reseña de {self.user} del Manga {self.manga.title} con una puntuación de {self.rating}'
    
class EstadoMangaUsuario(models.Model):
    ESTADO_CHOICES = [
        ('V', 'Viendo'),
        ('C', 'Considerando'),
        ('T', 'Completado'),
        ('N', 'Ninguno'),
    ]

    user = models.CharField(max_length=100)
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    estado = models.CharField(max_length=1, choices=ESTADO_CHOICES)

    def __str__(self):
        return f'{self.user} - {self.manga.title}: {self.estado}'