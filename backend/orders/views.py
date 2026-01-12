from rest_framework import generics
from rest_framework import permissions
from .models import Order
from .serializers import OrderSerializer

# List & Create Orders
class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.AllowAny]  # Change later for auth

# Update Order Status (PATCH)
class OrderUpdateStatusView(generics.UpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.AllowAny]
