from rest_framework import serializers
from ..models.mapinfo import MapInfo

class MapSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapInfo
    fields = ('id', 'address', 'latitude', 'longitude', 'lead_options')