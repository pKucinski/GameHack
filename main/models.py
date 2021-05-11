from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    programming = models.IntegerField(default=0)
    language = models.IntegerField(default=0)
    ios = models.IntegerField(default=0)
    charisma = models.IntegerField(default=0)
    inteligence = models.IntegerField(default=0)
    obstinacy = models.IntegerField(default=0)
    money = models.IntegerField(default=0)
    renown = models.IntegerField(default=0)
    bug_fixed = models.IntegerField(default=0)
    bus_used = models.IntegerField(default=0)

