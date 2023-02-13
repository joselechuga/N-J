from django.shortcuts import render

# Create your views here.

def home(request):
    carpinteria_desc = {'carpinteria':"Servicio de carpinteria",
                        'description':'Armado de closet, muebles de cocina, velador, comoda, escritorio, comdedor, Pack TV'
    }


    return render(request,'core/home.html',carpinteria_desc)