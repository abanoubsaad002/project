from django.urls import path

from.import views

urlpatterns = [
    path('bebo',views.abanoub,name='abanoub'),
    path('',views.abanoubs,name='abanoubs'),
]

