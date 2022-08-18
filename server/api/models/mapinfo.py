from django.db import models

class MapInfo(models.Model):
  # LEAD_INFO_CHOICES = [
  #   ('CONFIRMED NON-LEAD', 'Confirmed Non-Lead'),
  #   ('ASSUMED NON-LEAD', 'Assumed Non-Lead'),
  #   ('CONFIRMED LEAD', 'Confirmed Lead'),
  #   ('ASSUMED LEAD', 'Assumed Lead'),
  #   ('NON-RES', "Non-Residential"),
  #   ('NO INFO', 'No Information')
  # ]
  # latitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  # longitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  # address = models.CharField(max_length=50)
  # lead_options = models.CharField(max_length=20, choices=LEAD_INFO_CHOICES, default='NO INFO')
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
