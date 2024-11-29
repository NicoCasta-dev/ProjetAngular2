from rest_framework.generics import CreateAPIView, RetrieveAPIView
from django.contrib.auth.models import User
from .serializer import UtilisateurSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

class UtilisateurRegisterView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UtilisateurSerializer

class UserInfoView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UtilisateurSerializer

    def get_object(self):
        return self.request.user