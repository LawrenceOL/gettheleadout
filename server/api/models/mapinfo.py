from django.db import models

class MapInfo(models.Model):
  #used for suspected_lead
  PROBABILITY_OF_LEAD_CHOICES = [
    ('ASSUMED NON-LEAD', 'Assumed Non-Lead'),
    ('UNLIKELY', 'Unlikely Lead'),
    ('MAYBE', 'Maybe Lead'),
    ('LIKELY', 'Likely Lead'),
    ('ASSUMED LEAD', 'Assumed Lead'),
    ('NON-RES', 'Non-residential'),
    ('UNKNOWN', 'Unknown')
  ]
  latitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  longitude = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
  address = models.CharField(max_length=50)
  confirmed_lead = models.BooleanField(default=False)
  suspected_lead = models.CharField(max_length=20, choices=PROBABILITY_OF_LEAD_CHOICES, default='UNKNOWN')

  def __str__(self):
    return f"{self.latitude}, {self.longitude}, {self.address}, {self.confirmed_lead}, {self.suspected_lead}"
