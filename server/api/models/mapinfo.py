from django.db import models
from django.contrib.auth import get_user_model

class MapInfo(models.Model):
  latitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  longitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  address = models.CharField(max_length=50)
  confirmed_lead = models.BooleanField(default=False)
  suspected_lead = models.BooleanField(default=False)
  
  def __str__(self):
    return f"{self.latitude}, {self.longitude}, {self.address}, {self.confirmed_lead}, {self.suspected_lead}"
