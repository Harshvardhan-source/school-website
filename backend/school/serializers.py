from rest_framework import serializers
from .models import Inquiry, ContactMessage, Event, GalleryImage


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['id', 'name', 'email', 'phone', 'student_name', 'grade_applying', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date', 'category', 'image', 'is_featured', 'created_at']


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'image', 'category', 'caption', 'created_at']
