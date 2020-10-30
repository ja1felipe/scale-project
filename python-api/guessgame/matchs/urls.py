from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import MatchsViewSet

router = DefaultRouter()

router.register('', MatchsViewSet, basename='matchs')

matchs_urls = router.urls