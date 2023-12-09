from rest_framework import viewsets
from .serializers import EventoSerializer
from .models import Evento

# Create your views here.
class EventoView(viewsets.ModelViewSet):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()
