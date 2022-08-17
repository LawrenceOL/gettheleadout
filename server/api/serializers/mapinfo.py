from rest_framework import serializers
from ..models.mapinfo import MapInfo

class MapSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapInfo
    fields = ('id', 'pin', 'property_class', 'neighborhood_code', 'town_code', 'type_of_residence', 'apartments', 'longitude','latitude', 'census_tract', 'property_address', 'age', 'neighbor_mapping', 'town_and_neighbor', 'after_ban')