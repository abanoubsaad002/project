from django.urls import path

from.import views

urlpatterns = [
    path('product',views.product, name='Product'),
    path('',views.products, name='Products'),

]

