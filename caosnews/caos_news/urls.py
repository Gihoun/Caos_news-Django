from django.contrib import admin
from django.urls import path
from .views import index,galeria,contactanos,noticias,nosotros,registrar

urlpatterns = [   
    path('',index,name="index"),
    path('galeria/',galeria,name='gal'),
    path('contacto/',contactanos,name='contac'),
    path('noticia/',noticias,name='noti'),
    path('nosotros/',nosotros,name='nos'),
    path('registrar/',registrar,name='regis')
]