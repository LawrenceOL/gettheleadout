from django.urls import path
from .views.test import TestView
from .views.mapinfo import MapsView

urlpatterns = [
  path('test/', TestView.as_view(), name='test'),
  path('map/', MapsView.as_view(), name='map'), 
]