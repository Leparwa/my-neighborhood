from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver 
from django.db.models.signals import post_save 

class Neighborhood(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=39)
    occupants = models.IntegerField()
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
class Business(models.Model):
    business_name = models.CharField(max_length=100)
    business_email = models.EmailField(max_length=39)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    neighborhood = models.ForeignKey(Neighborhood, on_delete=models.SET_NULL, null=True, blank=True)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=39)
    neighborhood = models.ForeignKey(Neighborhood, related_name='neighborhood', on_delete=models.CASCADE)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)
    
    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.user.save()