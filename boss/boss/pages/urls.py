from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='index'),
    path('pop', views.about,name='pop'),
    path('Books', views.Books,name='Books'),
    path('update/<int:id>', views.update,name='update'),
    path('Delete/<int:id>', views.Delete,name='Delete'),
    
]
