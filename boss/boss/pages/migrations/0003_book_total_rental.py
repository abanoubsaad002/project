# Generated by Django 4.2.7 on 2023-11-25 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_category_book'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='total_rental',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]
