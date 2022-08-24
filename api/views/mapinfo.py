from rest_framework import generics
from ..serializers.mapinfo import MapSerializer
from ..serializers.mapinfo import MapInfo

class MapsList(generics.ListCreateAPIView):
  queryset = MapInfo.objects.all()
  serializer_class = MapSerializer

class MapDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = MapInfo.objects.all()
  serializer_class = MapSerializer
  lookup_field = "id"