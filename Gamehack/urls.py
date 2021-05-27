from django.contrib import admin
from django.urls import path
from main.views import game, index
from django.contrib.auth import views as auth_views
from django.conf.urls import url
from main import views as core_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('game/', game),
    path('', index, name='home'),
    url(r'^signup/$', core_views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view()),
]
