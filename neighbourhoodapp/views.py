from django.shortcuts import render, redirect
from rest_framework import generics, serializers
from .models import Business, Profile, Neighborhood
from .forms import NeighboorhoodForm, BusinesForm, ProfileForm


def home(request):
    neighborhood= Neighborhood.objects.all()
    profiles = Profile.objects.all().exclude(user=request.user)
    return render(request, 'ig/home.html', context ={'images': neighborhood, 'profiles':profiles })

def new_neighborhood(request):
    if request.method == 'POST':
        neighborhood_form = NeighboorhoodForm(request.POST)
        if neighborhood_form.is_valid():
            form = neighborhood_form .save(commit=False)
            form.admin = request.user
            form.save()
            return redirect('home')
    else:
        form = NeighboorhoodForm()
    return render(request, 'neighborhood.html', {'form': form})
    
def new_business(request):
    if request.method == 'POST':
        business_form = BusinesForm(request.POST)
        if business_form.is_valid():
            form = business_form.save(commit=False)
            form.owner = request.user
            form.save()
            return redirect('home')
    else:
        form = BusinesForm()
    return render(request, 'neighborhood.html', {'form': form})