from rest_framework import serializers
from .models import Avis
from django.contrib.auth.models import User

class AvisSerializer(serializers.HyperlinkedModelSerializer):

    utilisateur = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    # livre_audio = serializers.HyperlinkedRelatedField(
    #     view_name='livreaudio-detail',
    #     read_only=True
    # )

    class Meta:
        model = Avis
        fields = [ 'utilisateur', 'livre_audio', 'note', 'commentaire' ]