from django import forms
from .models import Profile, Business, Neighborhood
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class LoginForm(forms.ModelForm):
    email = forms.EmailField(max_length=254, help_text='Required. enter your account email address.', required=True)
    password = forms.CharField(label='Enter password', widget=forms.PasswordInput, required=True)
    class Meta:
        model = User
        fields = ('email', 'password',)

class SignUpForm(UserCreationForm):
    error_messages = {
    'password_mismatch': "The two password fields didn't match.",
    }
    email = forms.EmailField(max_length=254, help_text='Required. enter a valid email address.', required=True)
    password1 = forms.CharField(label='Enter password', required=True, widget=forms.PasswordInput, )
    password2 = forms.CharField(label='Confirm password', widget=forms.PasswordInput, required=True,)
    username = forms.CharField(help_text="Enter your user name", required=True, )
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', )
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