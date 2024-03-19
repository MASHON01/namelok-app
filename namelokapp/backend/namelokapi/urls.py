from django.db import router
from django.urls import include, path
from .views import CustomerListView, CustomerDetailView, BookingListView, BookingDetailView, ItineraryListView, ItineraryDetailView

urlpatterns = [
    # path('', include(router.urls)),
    path('customers/', CustomerListView.as_view(), name='customer-list'),
    path('customers/<int:pk>/', CustomerDetailView.as_view(), name='customer-detail'),
    path('bookings/', BookingListView.as_view(), name='booking-list'),
    path('bookings/<int:pk>/', BookingDetailView.as_view(), name='booking-detail'),
    path('itineraries/', ItineraryListView.as_view(), name='itinerary-list'),
    path('itineraries/<int:pk>/', ItineraryDetailView.as_view(), name='itinerary-detail'),
]
