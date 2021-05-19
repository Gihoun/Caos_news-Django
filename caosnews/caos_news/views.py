from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"index.html")
def noticias(request):
    return render(request,"Inter-noticia_01.html")
def contactanos(request):
    return  render(request,"Contacto.html")
def galeria(request):
    return render(request,"Galeria-noticia_01.html")
def nosotros(request):
    return render(request,"Nosotros.html")
def registrar(request):
    return render(request,"Registro.html")