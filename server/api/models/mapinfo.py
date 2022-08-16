from django.db import models

class MapInfo(models.Model):
  LEAD_INFO_CHOICES = [
    ('CONFIRMED NON-LEAD', 'Confirmed Non-Lead'),
    ('ASSUMED NON-LEAD', 'Assumed Non-Lead'),
    ('CONFIRMED LEAD', 'Confirmed Lead'),
    ('ASSUMED LEAD', 'Assumed Lead'),
    ('NON-RES', "Non-Residential"),
    ('NO INFO', 'No Information')
  ]
  latitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  longitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  address = models.CharField(max_length=50)
  lead_options = models.CharField(max_length=20, choices=LEAD_INFO_CHOICES, default='NO INFO')

  def __str__(self):
    return f"{self.latitude}, {self.longitude}, {self.address}, {self.lead_options}"
