# Generated by Django 3.2 on 2021-04-27 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='bio',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='birth_date',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='location',
        ),
        migrations.AddField(
            model_name='profile',
            name='bug_fixed',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='bus_used',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='charisma',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='inteligence',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='ios',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='language',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='money',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='obstinacy',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='programming',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='profile',
            name='renown',
            field=models.IntegerField(default=0),
        ),
    ]
