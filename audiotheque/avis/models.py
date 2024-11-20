from django.db import models
from mediatheque.models import LivreAudio
from django.contrib.auth.models import User
class Avis(models.Model):
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE)
    livre_audio = models.ForeignKey(LivreAudio, on_delete=models.CASCADE)
    note = models.TextField()
    commentaire = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.utilisateur} {self.livre_audio} {self.note} {self.commentaire} {self.date_creation}'