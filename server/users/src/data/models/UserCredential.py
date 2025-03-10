from django.db import models

class UserCredential(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    salt = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
