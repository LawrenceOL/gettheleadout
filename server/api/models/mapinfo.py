from django.db import models

class MapInfo(models.Model):
  pin = models.BigIntegerField()
  est_year = models.SmallIntegerField()
  pct_minority = models.FloatField()
  pct_single = models.FloatField()
  pct_non_english = models.FloatField()
  median_hh_income = models.IntegerField()
  pct_hh_below_poverty = models.FloatField()
  pct_hh_with_children = models.FloatField()
  hyd_year_stamped = models.SmallIntegerField()
  g_label = models.FloatField()
  property_class = models.SmallIntegerField()
  neighbor_code = models.SmallIntegerField()
  town_code = models.SmallIntegerField()
  type_of_residence = models.FloatField()
  prior_tax_land = models.FloatField()
  prior_tax_building = models.FloatField()
  longitude = models.FloatField()
  latitude = models.FloatField()
  census_tract = models.FloatField()
  property_address = models.CharField(max_length=255)
  age = models.SmallIntegerField()
  neighborhood_code = models.SmallIntegerField()
  


  def __str__(self):
    return f"{self.latitude}, {self.longitude}, {self.property_address}, {self.est_year}"
