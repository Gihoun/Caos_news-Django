# Generated by Django 3.2.2 on 2021-05-18 07:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('caos_news', '0009_noticia_categoria'),
    ]

    operations = [
        migrations.AlterField(
            model_name='noticia',
            name='categoria',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='caos_news.categoria'),
        ),
    ]
