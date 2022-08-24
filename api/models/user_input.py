from django.db import models

class UserLeadInfo(models.Model):
  lead_img = models.ImageField(upload_to="lead_img")
  name = models.CharField(max_length=50)
  address = models.CharField(max_length=254)
  city = models.CharField(max_length=50)
  state = models.CharField(max_length=20)
  zip_code = models.IntegerField()
  email = models.EmailField(max_length=254, unique=True)

def __str__(self):
  return f"{self.name}, {self.address}, {self.city}, {self.state}, {self.zip_code}"