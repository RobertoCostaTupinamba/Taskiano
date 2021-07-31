# Generated by Django 3.1.2 on 2021-07-31 19:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id_project', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=254)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('closed_in', models.DateField()),
                ('color', models.IntegerField()),
                ('has_archive', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Reminder',
            fields=[
                ('id_project', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=254)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
