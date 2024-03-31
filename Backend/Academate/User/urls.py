from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, ProfileViewSet, SkillViewSet, EducationViewSet,
    UserRegister, UserLogin, UserLogout, UserView
)

# Create a router and register viewsets with it
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'educations', EducationViewSet)

# Define paths for custom actions
urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegister.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    path('user/', UserView.as_view(), name='user'),
]


''' /users/: List and create users.
    /users/<pk>/: Retrieve, update, and delete a specific user.
    /profiles/: List and create profiles.
    /profiles/<pk>/: Retrieve, update, and delete a specific profile.
    /skills/: List and create skills.
    /skills/<pk>/: Retrieve, update, and delete a specific skill.
    /educations/: List and create educations.
    /educations/<pk>/: Retrieve, update, and delete a specific education.
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    
    '''


