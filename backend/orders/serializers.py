from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductVariantSerializer

class OrderItemSerializer(serializers.ModelSerializer):
    variant = ProductVariantSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'variant', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    user_name = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'user_name', 'status', 'items', 'created_at', 'updated_at']
        read_only_fields = ['user', 'created_at', 'updated_at']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(user=self.context['request'].user, **validated_data)
        for item_data in items_data:
            OrderItem.objects.create(
                order=order,
                product=item_data['product'],
                variant=item_data.get('variant', None),
                quantity=item_data.get('quantity', 1),
                price=item_data['product'].price
            )
        return order
