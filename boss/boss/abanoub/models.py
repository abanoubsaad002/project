from django.db import models

# Create your models here.

class User(models.Model):
    names = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6,decimal_places=2)