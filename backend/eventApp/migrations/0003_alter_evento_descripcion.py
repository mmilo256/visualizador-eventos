# Generated by Django 5.0 on 2023-12-10 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventApp', '0002_alter_evento_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='descripcion',
            field=models.TextField(blank=True),
        ),
    ]
