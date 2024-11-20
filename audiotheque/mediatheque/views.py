from rest_framework import viewsets
from .models import Auteur, LivreAudio
from .serializer import AuteurSerializer, LivreAudioListSerializer, LivreAudioDetailSerializer, AuteurDetailSerializer
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import AllowAny
#from django_filters.rest_framework import DjangoFilterBanckend

class AuteurViewSet(viewsets.ModelViewSet):
    queryset = Auteur.objects.all()
    serializer_class = AuteurSerializer
    permission_classes = [ IsAdminUser ]
    # filter_backends = [ DjangoFilterBackend ]
    # filterset_fields = [ 'nom', 'prenom' ]

    def get_serializer_class(self):
        if self.action == 'list':
            return AuteurSerializer
        
        return AuteurDetailSerializer

class LivreAudioViewSet(viewsets.ModelViewSet):
    queryset = LivreAudio.objects.all()
    #serializer_class = LivreAudioDetailSerializer
    permission_classes = [ AllowAny ]

    def get_serializer_class(self):
        if self.action == 'list':
            return LivreAudioListSerializer
        
        return LivreAudioDetailSerializer