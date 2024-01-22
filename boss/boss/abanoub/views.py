from django.shortcuts import render
from .models import User
# Create your views here.

def abanoub(request):
    return render(request, 'abanoub/abanoub.html')

def abanoubs(request):
    return render(request, 'abanoub/abanoubs.html',{'user':User.objects.all()})