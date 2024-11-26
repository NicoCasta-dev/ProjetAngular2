from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializer import UtilisateurSerializer
from rest_framework.permissions import AllowAny

class UtilisateurRegisterView(CreateAPIView):
    permission_classes = [AllowAny]

    queryset = User.objects.all()
    serializer_class = UtilisateurSerializer

