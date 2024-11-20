from rest_framework import serializers
from .models import Abonnement, Transaction

class AbonnementSerializer(serializers.HyperlinkedModelSerializer):    
    
    utilisateur = serializers.HyperlinkedRelatedField(
        #queryset = Abonnement.objects.all(),
        view_name='user-detail',
        read_only=True
    )

    class Meta:
        model = Abonnement
        fields = [ 'url', 'id', 'utilisateur', 'date_debut', 'date_fin', 'statut' ]

class TransactionSerializer(serializers.HyperlinkedModelSerializer):

    utilisateur = serializers.HyperlinkedRelatedField(
        #queryset = Transaction.objects.all(),
        view_name='user-detail',
        read_only=True
    )

    class Meta:
        model = Transaction
        fields = ['url', 'id', 'utilisateur', 'abonnement', 'montant', 'type_transaction', 'date_transaction']
