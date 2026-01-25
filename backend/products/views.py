from rest_framework import generics, permissions
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Category, Product
from .serializers import ProductSerializer, ProductVariantSerializer, CategorySerializer

# ---- Category ----
class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]

# ---- Product ----
class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]  # 👈 PUBLIC
