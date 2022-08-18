from django.db import models

class MapInfo(models.Model):
  pin = models.BigIntegerField()
  property_class = models.SmallIntegerField(null=True, blank=True)
  neighborhood_code = models.SmallIntegerField(null=True, blank=True)
  town_code = models.SmallIntegerField(null=True, blank=True)
  type_of_residence = models.FloatField(null=True, blank=True)
  apartments = models.FloatField(null=True, blank=True)
  longitude = models.FloatField(null=True, blank=True)
  latitude = models.FloatField(null=True, blank=True)
  census_tract = models.FloatField(null=True, blank=True)
  property_address = models.CharField(max_length=255, null=True, blank=True)
  age = models.SmallIntegerField(null=True, blank=True)
  neighbor_mapping = models.SmallIntegerField(null=True, blank=True)
  town_and_neighbor = models.IntegerField(null=True, blank=True)
  after_ban = models.BooleanField(null=True, blank=True)
  


  def __str__(self):
    return f"{self.latitude}, {self.longitude}, {self.property_address}"
