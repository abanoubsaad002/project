from django.db import models
from datetime import datetime
# Create your models here.


class Products(models.Model):
    
    k = [
        ('eleictric','eleictric'),
        ('price','price'),
        ('food','food'),
        ('sport','sport'),
        
    ]
    

    
    name = models.CharField(max_length=100,default='True', verbose_name='titel')
    price = models.DecimalField(max_digits=6,decimal_places=2,default=22.5)
    content = models.TextField(default='True',null=True,blank=True, verbose_name='write the compline')
    image = models.ImageField(upload_to='images/%d/%m/%y',default='images/19/11/23/cv.PNG')
    active = models.BooleanField(default=True)
    category = models.CharField(max_length=35, blank=True, null=True,choices=k,default='price')
    data = models.DateField(null=True, default=datetime.now)
    time = models.TimeField(null=True ,  default=datetime.now)
    created = models.DateTimeField(null=True , default=datetime.now)
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name'] # ترتيب كل الصفحات
        verbose_name = 'name'