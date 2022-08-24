from rest_framework import generics
from ..serializers.user_input import UserLeadInfoSerializer
from ..models.user_input import UserLeadInfo

class UserInfoList(generics.ListCreateAPIView):
  queryset = UserLeadInfo.objects.all()
  serializer_class = UserLeadInfoSerializer

