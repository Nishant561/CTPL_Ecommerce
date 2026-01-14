from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductVariantSerializer
from products.models import ProductVariant  # for getting variant price

class OrderItemSerializer(serializers.ModelSerializer):
    variant = ProductVariantSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'variant', 'quantity', 'price']
        read_only_fields = ['price']  # price will be set automatically

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    user_name = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'user_name', 'status', 'items', 'created_at', 'updated_at']
        read_only_fields = ['user', 'created_at', 'updated_at']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        user = validated_data.pop('user')  # passed from view

        # create the order
        order = Order.objects.create(user=user, **validated_data)

        # create order items
        for item_data in items_data:
            variant = item_data.get('variant', None)

            # Determine price: variant price if variant exists, else product price
            if variant:
                price = ProductVariant.objects.get(id=variant.id).price
            else:
                price = item_data['product'].price

            OrderItem.objects.create(
                order=order,
                product=item_data['product'],
                variant=variant,
                quantity=item_data.get('quantity', 1),
                price=price
            )
        return order
