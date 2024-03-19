from django.db import models

class Customer(models.Model):
    client_id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name

class Booking(models.Model):
    STATUS_CHOICES = (
        ('Active', 'Active'),
        ('Pending', 'Pending'),
        ('Rejected', 'Rejected'),
        ('Cancelled', 'Cancelled'),
    )

    VEHICLE_TYPE_CHOICES = (
        ('Car', 'Car'),
        ('Van', 'Van'),
        ('Truck', 'Truck'),
        ('Motorcycle', 'Motorcycle'),
    )

    booking_id = models.BigAutoField(primary_key=True)
    customer_name = models.CharField(max_length=50)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Active')
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=100)
    vehicle_type = models.CharField(max_length=20, choices=VEHICLE_TYPE_CHOICES)

    def __str__(self):
        return str(self.booking_id)

class Itinerary(models.Model):
    DAY_CHOICES = (
        ('Morning', 'Morning'),
        ('Afternoon', 'Afternoon'),
        ('Evening', 'Evening'),
    )

    days = models.IntegerField()
    time_of_day = models.CharField(max_length=10, choices=DAY_CHOICES)
    note = models.TextField()

    def __str__(self):
        return f"Day {self.days} - {self.time_of_day}"
