from django.db import models

class Match(models.Model):
  name = models.CharField(max_length=30)
  attempts = models.IntegerField()
  time = models.IntegerField()
  number = models.IntegerField()

  def __str__(self):
    return self.name
  
  class Meta:
    ordering = ('time',)