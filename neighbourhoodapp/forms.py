from django import forms
from .models import Profile, Business, Neighborhood
from django.contrib.auth.models import User

class NeighboorhoodForm(forms.ModelForm):
    class Meta:
        model = Neighborhood
        fields = ('name', 'occupants', 'location',)
        widgets={
            'name': forms.TextInput(attrs={'class':'form-control'}),
            'occupants': forms.TextInput(attrs={'class':'form-control'}),
            'location': forms.TextInput(attrs={'class':'form-control'}),
            'email': forms.TextInput(attrs={'class':'form-control'}),
        }
class BusinesForm(forms.ModelForm):
    class Meta:
        model = Business
        fields = ('business_name', 'business_email', 'neighborhood',)
        widgets={
            'business_name': forms.TextInput(attrs={'class':'form-control'}),
            'neighborhood': forms.Select(attrs={'class':'form-control'}),
            'business_email': forms.EmailInput(attrs={'class':'form-control'}),
        }

class ProfileForm(forms.ModelForm):
    name = forms.TextInput(source='user.username')
    email = forms.EmailInput(source='user.email')
    class Meta:
        model = Profile
        fields = ('name', 'email', 'neighborhood',)
        read_only_fields=[
            'neighborhood'
        ]
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email']
    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User.objects.create(**validated_data)
        Profile.objects.create(user=user, **profile_data)
        return user