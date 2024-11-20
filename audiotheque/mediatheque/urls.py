from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AuteurViewSet, LivreAudioViewSet

router = DefaultRouter()
router.register(r'auteurs', AuteurViewSet)
router.register(r'livres_audio', LivreAudioViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
