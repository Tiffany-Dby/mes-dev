from django.db import models

class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    
    def to_json(self):
        return {
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email
        }
