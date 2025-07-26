from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html', {})

def atracoes(request):
    return render(request, 'atracoes.html', {})

def historiaCultura(request):
    return render(request, 'historiaCultura.html', {})

def galeria(request):
    return render(request, 'galeria.html', {})