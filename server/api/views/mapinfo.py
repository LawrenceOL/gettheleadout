from rest_framework import generics
from ..serializers.mapinfo import MapSerializer
from ..serializers.mapinfo import MapInfo

class MapsView(generics.ListCreateAPIView):
  queryset = MapInfo.objects.all()
  serializer_class = MapSerializer
