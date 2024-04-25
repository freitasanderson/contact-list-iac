# Generated by Django 5.0.4 on 2024-04-25 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contatos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255, verbose_name='Nome')),
                ('email', models.CharField(max_length=255, null=True, unique=True, verbose_name='Email')),
                ('celular', models.CharField(blank=True, default=None, help_text='Fone de contato com DDD (63) 98765-4321', max_length=11, null=True, verbose_name='Celular com DDD')),
                ('dataNascimento', models.DateField(blank=True, null=True, verbose_name='Data de Nascimento')),
                ('dataCadastro', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Data de Cadastro')),
                ('dataUltimaAlteracao', models.DateTimeField(auto_now=True, null=True, verbose_name='Última alteração')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo?')),
            ],
            options={
                'verbose_name': 'Contato',
                'verbose_name_plural': 'Contatos',
                'ordering': ['nome'],
            },
        ),
    ]