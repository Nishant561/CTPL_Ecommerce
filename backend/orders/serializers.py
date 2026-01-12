from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    user_name = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'user_name', 'product', 'product_name', 'quantity', 'status', 'created_at', 'updated_at']
