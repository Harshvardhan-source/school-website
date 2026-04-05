from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.SchoolInfoView.as_view(), name='school-info'),
    path('inquiry/', views.InquiryCreateView.as_view(), name='inquiry-create'),
    path('contact/', views.ContactCreateView.as_view(), name='contact-create'),
    path('events/', views.EventListView.as_view(), name='event-list'),
    path('gallery/', views.GalleryListView.as_view(), name='gallery-list'),
]
