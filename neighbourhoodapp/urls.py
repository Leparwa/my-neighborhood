from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("neighborhood/", views.new_neighborhood, name="neighborhood"),
    path("register/", views.register, name="register"),
    path("business/", views.new_business, name="business"),
    path("profile/", views.profile, name="business"),
    path('accounts/', include('django.contrib.auth.urls')),
    ]