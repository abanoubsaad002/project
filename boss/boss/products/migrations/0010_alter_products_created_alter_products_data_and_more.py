# Generated by Django 4.2.7 on 2023-11-20 14:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_alter_products_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='created',
            field=models.DateTimeField(default=datetime.datetime.now, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='data',
            field=models.DateField(default=datetime.datetime.now, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='time',
            field=models.TimeField(default=datetime.datetime.now, null=True),
        ),
    ]
