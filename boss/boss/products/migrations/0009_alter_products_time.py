# Generated by Django 4.2.7 on 2023-11-19 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_products_created_products_data_products_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='time',
            field=models.TimeField(null=True),
        ),
    ]
