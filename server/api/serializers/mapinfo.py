from rest_framework import serializers
from ..models.mapinfo import MapInfo

class MapSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapInfo
    fields = ('id','longitude','latitude', 'est_year', 'property_address')