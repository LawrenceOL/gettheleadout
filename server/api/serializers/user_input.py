from rest_framework import serializers
from ..models.user_input import UserLeadInfo

class UserLeadInfoSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserLeadInfo
    fields = ('id', 'lead_img', 'name', 'address', 'city', 'state', 'zip_code', 'email')