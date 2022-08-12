from django.urls import path
from .views.test import TestView
from .views.mapinfo import MapsList, MapDetail

urlpatterns = [
  path('test/', TestView.as_view(), name='test'),
  path('map/', MapsList.as_view(), name='map'), 
  path('map/<int:id>/', MapDetail.as_view(), name='map'), 
]