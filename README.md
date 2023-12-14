# eventApp: Visualizador de eventos
La aplicación web eventApp permite a los usuarios registrar y visualizar eventos a través de una interfaz web. El backend está construido con Django, proporcionando una API REST, y la interfaz de usuario se hizo con React (Vite).

Demo de la App en YouTube: https://www.youtube.com/watch?v=utM0b_Tz4NM&ab_channel=EmilioSotoAndrade
## Requisitos

 - Python 3.6+ 
 - Node.js
 - npm
## Instalación
### Backend (Django)
1. Crear un entorno virtual en el directorio raíz del proyecto:
```bash
$ python -m venv venv
```
2. Activar el entorno virtual:
```bash
$ cd venv/Scripts
$ . activate
$ cd ../.. # Volver al directorio raíz del proyecto.
```
3. Instalar las dependencias de Django:
```bash
$ pip install -r requirements.txt
cd ../.. # Volver al directorio raíz del proyecto.
```
4. Navegar a la carpeta backend y realizar las migraciones de la base de datos:
```bash
$ cd backend/
$ python manage.py migrate
```
5. Iniciar el servidor:
```bash
$ python manage.py runserver
```
El backend estará disponible en [http://localhost:8000](http://localhost:8000/).
La ruta de la API es [http://localhost:8000/api/eventos/](http://localhost:8000/api/eventos/)
### Frontend (React)
1. Navegar a la carpeta frontend e instalar las dependencias de React:
```bash
$ npm i
```
2. Iniciar la aplicación de React:
```bash
$ npm run dev
```
La aplicación React se ejecuta en [http://localhost:5173](http://localhost:5173) por defecto.

*Nota: Si la app de React se ejecuta en un puerto diferente, agregar el origen en CORS_ALLOWED_ORIGINS dentro de settings.py en el proyecto de Django.*
```python
#settings.py
CORS_ALLOWED_ORIGINS = ['http://localhost:5174']
```

