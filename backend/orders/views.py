from rest_framework import generics, permissions
from .models import Order
from .serializers import OrderSerializer

class OrderListCreateView(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.all()
        return Order.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class OrderUpdateStatusView(generics.UpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAdminUser]  # Only admin can update status
