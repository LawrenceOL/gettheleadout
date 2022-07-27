from django.urls import path
from .views.test import TestView

urlpatterns = [
  path('test/', TestView.as_view(), name='test'),
]