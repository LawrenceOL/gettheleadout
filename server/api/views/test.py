from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class TestView(APIView):
  def get(self, request):
    return Response("Hello world")