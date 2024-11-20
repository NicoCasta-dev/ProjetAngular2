from django.db import models
from django.conf import settings


class Abonnement(models.Model):
    utilisateur = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_debut = models.DateField()
    date_fin = models.DateField()
    statut = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.utilisateur} {self.date_debut} {self.date_fin} {self.statut}'   
    

class Transaction(models.Model):
    utilisateur = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    abonnement = models.ForeignKey(Abonnement, on_delete=models.CASCADE)
    montant = models.DecimalField((""), max_digits=5, decimal_places=2)
    type_transaction = models.CharField(max_length=50) # ex: paiement, remboursement...
    date_transaction = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.utilisateur} {self.abonnement} {self.montant} {self.type_transaction} {self.date_transaction}'