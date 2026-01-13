from django.contrib import admin
from .models import Category, Product, ProductVariant

class ProductVariantInline(admin.TabularInline):
    model = ProductVariant
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'created_at')
    list_filter = ('category',)
    search_fields = ('name', 'description')
    inlines = [ProductVariantInline]

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
