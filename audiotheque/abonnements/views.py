from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Abonnement, Transaction
from .serializer import AbonnementSerializer, TransactionSerializer

class AbonnementViewSet(viewsets.ModelViewSet):
    queryset = Abonnement.objects.all()
    serializer_class = AbonnementSerializer
    permission_classes = [ IsAuthenticated ]

    def get_queryset(self):
        return Abonnement.objects.filter(utilisateur=self.request.user)

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [ IsAuthenticated ]
    
    def get_queryset(self):
        return Transaction.objects.filter(utilisateur=self.request.user)