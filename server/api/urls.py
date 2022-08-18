from django.urls import path
from .views.test import TestView
from .views.mapinfo import MapsList, MapDetail
from.views.user_input import UserInfoList

urlpatterns = [
  path('map/', MapsList.as_view(), name='map'), 
  path('map/<int:id>/', MapDetail.as_view(), name='map'),
  path('userinfo/', UserInfoList.as_view(), name='user_lead_info')
]