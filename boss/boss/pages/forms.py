from django import forms
from.models import *
# label يغير الاسم
# inital بيتكتب قيمه افتراضيه
# disabled  للالغاء
# help_text كلام يتم كتابته لتوضيح ما يتم ادخاله 
# widgets تغير نوع المدخل من اسم لي باسورد *-* widget = forms.PasswordInput
# required
class LoginForm(forms.ModelForm):
        class Meta:
            model = Login
            fields = '__all__'            #fields = ['username', 'password'] 
            
class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']
        Widgets = {'name':forms.TextInput(attrs={'class': 'form-control'})}
        
class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = [
            'Title',
            'author',
            'photo_book',
            'photo_author',
            'pages',
            'price',
            'rental_price_day',
            'rental_days',
            'total_rental',
            'status',
            'category',
        ]
        
        widgets = {
            'Title': forms.TextInput(attrs={'class': 'form-control'}),
            'author': forms.TextInput(attrs={'class': 'form-control'}),
            'photo_book': forms.FileInput(attrs={'class': 'form-control'}),
            'photo_author': forms.FileInput (attrs={'class': 'form-control'}),
            'pages': forms.NumberInput(attrs={'class': 'form-control'}),
            'price': forms.NumberInput(attrs={'class': 'form-control'}),
            'rental_price_day': forms.NumberInput(attrs={'class': 'form-control', 'id': 'aaa'}),
            'rental_days': forms.NumberInput(attrs={'class': 'form-control', 'id': 'sss'}),
            'total_rental': forms.NumberInput(attrs={'class': 'form-control', 'id': 'ddd'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
            'category': forms.Select(attrs={'class': 'form-control'}),
        }