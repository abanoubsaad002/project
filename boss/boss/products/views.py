from django.shortcuts import render
from.models import Products
# Create your views here.

def product(request):
    return render(request, 'products/product.html')

def products(request):
    x={'pop':Products.objects.get(name='abanoub')}# التحصل على عنصر واحد
    z={'pop':Products.objects.all()} # اظهار الجميع
    f={'pop':Products.objects.filter(price__range=(22.5,999.0))} # البحث بائ شئ 
    # filter(str__() exact بالتحديد , contains للحصر ) (int__ in []لتحديد اي رقم ,range() حصر بين ارقام )
    w={'pop':Products.objects.order_by('-price')} # الترتيب باي شئ
    a={'pop':str(Products.objects.count())} # يقوم بالعد واظهار العدد
    k={'pop':Products.objects.exclude(price=22.5)}# استسناء اي شئ
    
    
    return render(request, 'products/products.html', f)
    