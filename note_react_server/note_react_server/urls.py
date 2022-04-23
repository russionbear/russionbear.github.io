"""note_react_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from note import urls
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', include(urls)),
    path('books', views.books),
    path('notes', views.notes),
    path('value', views.value),
    path('source', views.source),
    path('edit', views.edit),
    path('browser', views.browser),
    path('', views.index)
]
