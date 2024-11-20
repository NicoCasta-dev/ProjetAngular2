from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Avis
from .serializer import AvisSerializer

class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer
    permission_classes = [ IsAuthenticated ]
