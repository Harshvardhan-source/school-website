from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Inquiry, ContactMessage, Event, GalleryImage
from .serializers import InquirySerializer, ContactMessageSerializer, EventSerializer, GalleryImageSerializer


class InquiryCreateView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Thank you for your inquiry. We will contact you shortly.', 'data': serializer.data},
            status=status.HTTP_201_CREATED
        )


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Your message has been received. We will get back to you soon.', 'data': serializer.data},
            status=status.HTTP_201_CREATED
        )


class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs


class GalleryListView(generics.ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs


class SchoolInfoView(APIView):
    def get(self, request):
        return Response({
            'name': "St. Philomena's English School",
            'tagline': 'Nurturing Minds, Shaping Futures',
            'address': '15 F, Millennium Avenue, 47/A12, Millennium Ave, Kumaraswamy Layout II Stage, Bengaluru, Karnataka 560111',
            'phone': '080 2666 7999',
            'email': 'office@st-philomena.org',
            'medium': 'English',
            'board': 'Karnataka State Board',
            'type': 'Co-educational Day School',
            'admissions_open': True,
            'location': 'Kumaraswamy Layout, Bengaluru',
            'established': '[Year of Establishment]',
        })
