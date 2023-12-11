from django.db import models

# Create your models here.
class Evento(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    fecha = models.DateTimeField()
    ubicacion = models.CharField(max_length=200)

    # Muestra el título de cada evento en el panel de administración
    def __str__(self):
        return self.titulo