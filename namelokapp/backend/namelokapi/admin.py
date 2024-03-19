from django.contrib import admin
from .models import Customer, Booking, Itinerary

admin.site.register(Customer)
admin.site.register(Booking)
admin.site.register(Itinerary)
