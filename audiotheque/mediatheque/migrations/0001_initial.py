# Generated by Django 5.1.1 on 2024-09-24 14:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Auteur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('biographie', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='LivreAudio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('duree', models.IntegerField()),
                ('chemin_fichier', models.FileField(upload_to='livres_audio/')),
                ('auteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mediatheque.auteur')),
            ],
        ),
    ]
