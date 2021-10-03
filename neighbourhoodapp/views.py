from django.shortcuts import render, redirect
from .models import Business, Profile, Neighborhood
from .forms import NeighboorhoodForm, BusinesForm, ProfileForm, SignUpForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.exceptions import BadRequest

def home(request):
    neighborhoods= Neighborhood.objects.all()
    profiles = Profile.objects.all()
    return render(request, 'home.html', context ={'neighborhoods': neighborhoods, 'profiles':profiles })
@login_required(login_url='/accounts/login/')
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
@login_required(login_url='/accounts/login/')
def profile(request):
    
    return render(request, 'profile.html')

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
    return render(request, 'business.html', {'form': form})
def register(request):
    if request.method == "POST":
        form = SignUpForm(data=request.POST)
        if form.is_valid():
            try:
                user = form.save()
                res = login(request, user)
                print(res)
            except BadRequest as er:
                messages.error(request, er)
                return redirect('register')
            messages.success(request, "registered successfully")
            return redirect('profile')
    else:
        form = SignUpForm()
    context ={"form":form} 
    return render(request, "registration/register.html", context)