from django.test import TestCase
from rest_framework.test import APIClient
from .models import Evento

class EventoCRUDTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.api_url = '/api/eventos/'
        # Datos del evento para ser utilizados en las pruebas
        self.evento_data = {
            'titulo': 'Evento de prueba',
            'descripcion': 'Descripción del evento',
            'fecha': '2023-12-31T12:00:00',
            'ubicacion': 'Nueva Ubicación'
        }

    # Prueba la creación de un nuevo evento con el método POST
    def test_crear_evento(self):
        response = self.client.post(self.api_url, self.evento_data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Evento.objects.count(), 1) 
        self.assertEqual(Evento.objects.get().titulo, 'Evento de prueba')

    # Prueba la obtención del evento de prueba con el método GET
    def test_listar_eventos(self):
        self.client.post(self.api_url, self.evento_data, format='json')
        response = self.client.get(self.api_url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['titulo'], 'Evento de prueba')

    # Prueba el método PUT editando el evento de prueba
    def test_actualizar_evento(self):
        response_create = self.client.post(self.api_url, self.evento_data, format='json')
        evento_id = response_create.data['id']
        updated_data = {
            'titulo': 'Evento Actualizado',
            'descripcion': 'Descripción actualizada',
            'fecha': '2023-12-31T15:30:00',
            'ubicacion': 'Ubicación actualizada'
        }
        response_update = self.client.put(f'{self.api_url}{evento_id}/', updated_data, format='json')
        self.assertEqual(response_update.status_code, 200)
        self.assertEqual(response_update.data['titulo'], 'Evento Actualizado')

    # Prueba la eliminación del evento con el método DELETE
    def test_eliminar_evento(self):
        response_create = self.client.post(self.api_url, self.evento_data, format='json')
        evento_id = response_create.data['id']
        response_delete = self.client.delete(f'{self.api_url}{evento_id}/')
        self.assertEqual(response_delete.status_code, 204)
        self.assertEqual(Evento.objects.count(), 0)
