from rest_framework import serializers
from mediatheque.models import Auteur, LivreAudio

class AuteurSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Auteur
        fields = [ 'prenom', 'nom', 'url' ]

class AuteurDetailSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Auteur
        fields = [ 'id', 'nom', 'prenom', 'biographie' ]

class LivreAudioListSerializer(serializers.HyperlinkedModelSerializer):

    auteur = serializers.HyperlinkedRelatedField(
        queryset=Auteur.objects.all(),
        view_name='auteur-detail'
    )
    

    class Meta:
        model = LivreAudio
        fields = [ 'id', 'titre', 'auteur', 'url', 'image' ]

class LivreAudioDetailSerializer(serializers.HyperlinkedModelSerializer):

    auteur = serializers.HyperlinkedRelatedField(
        view_name='auteur-detail',
        queryset=Auteur.objects.all()
    )

    class Meta:
        model = LivreAudio
        fields = [ 'id', 'titre', 'auteur', 'description', 'duree', 'chemin_fichier', 'image' ]