from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def game(request):
    return render(request, 'game.html')


def trening(request):
    return render(request, 'trening.html')


def index(request):
    return render(request, 'index.html')