from django.shortcuts import redirect, render , get_object_or_404
from.models import *
from.forms import *
# Create your views here.

def index(request):
    
    if request.method == 'POST':
        book = BookForm(request.POST,request.FILES)
        if book.is_valid():
            book.save()
        category = CategoryForm(request.POST)
        if category.is_valid():
                category.save()
    x={
        'name':Book.objects.all(),
        'category':Category.objects.all(),
        'form':BookForm(),
        'face':CategoryForm(),
        'allbooks':Book.objects.filter(active=True).count(),
        'booksold':Book.objects.filter(status='sold').count(),
        'bookavailble':Book.objects.filter(status='availble').count(),
        'bookrental':Book.objects.filter(status='rental').count(),
    }
    
    return render(request,'pages/index.html',x)
#  return HttpResponse('hello world')

def about(request):
    if request.method == 'POST':
        dataform = LoginForm(request.POST)
        if dataform.is_valid():
            dataform.save()
    
    # P = request.POST.get('password')
    # U = request.POST.get('username')
    # D = Login(password=P,username=U)
    # D.save()
    return render(request,'pages/pop.html', {'bebo':LoginForm})
#  return HttpResponse('will test')

def Navbar(request):
    return render(request,'pages/Navbar.html')
def Books(request):
    search = Book.objects.all()
    azx = None
    if 'search_name' in request.GET:
        azx = request.GET['search_name']
        if azx:
            search=search.filter(Title__icontains=azx)
            
            
    x={
        'face':CategoryForm(),
        'name':search,
        'category':Category.objects.all()
        }
    return render(request,'pages/Books.html',x)
def update(request,id):
    asd = Book.objects.get(id=id)
    if request.method == 'POST':
        zxc = BookForm(request.POST,request.FILES,instance = asd)
        if zxc.is_valid():
            zxc.save()
            return redirect('/')
    else:
        zxc = BookForm(instance = asd)
        wl3 = {
            'form': zxc,
        }
    return render(request,'pages/update.html',wl3)

def Delete(request,id):
    bob =  get_object_or_404(Book,id=id)
    if request.method == 'POST':
        bob.delete()
        return redirect('/')
    return render(request,'pages/Delete.html')