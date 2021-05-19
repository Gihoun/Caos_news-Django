from django.db import models

# Create your models here.
class Categoria(models.Model):   
    cod_catg = models.IntegerField(primary_key=True)
    nombre_catg = models.CharField(max_length=50)
  
    def __str__(self):
        return self.nombre_catg
class Noticia(models.Model):
    nombre_not = models.CharField(primary_key= True, max_length=50)
    fecha_not = models.DateField()
    redac =  models.TextField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre_not