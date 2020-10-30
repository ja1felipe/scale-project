from rest_framework import viewsets, mixins
from rest_framework.pagination import PageNumberPagination
from .models import Match
from .serializers import MatchSerializer


class MatchPagination(PageNumberPagination):
  page_size = 5
  page_query_param = 'page' 
  max_page_size = 5


class MatchsViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
  serializer_class = MatchSerializer
  queryset = Match.objects.all()
  pagination_class = MatchPagination

