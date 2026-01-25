from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]


class LoginView(ObtainAuthToken):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = token.user

        return Response({
            'token': token.key,
            'user_id': user.id,
            'username': user.username,
            'is_staff': user.is_staff,
            'is_superuser': user.is_superuser
        })

        
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # delete the token
        request.user.auth_token.delete()
        return Response({"message": "Logged out successfully"})