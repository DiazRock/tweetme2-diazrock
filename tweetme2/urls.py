from django.contrib import admin
from django.urls import path, re_path, include
from tweets.views import (
    home_view, 
    tweet_detail_view,
    tweet_delete_view, 
    tweets_list_view,
    tweet_create_view,
    tweet_action_view)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view),
    path('tweets/<int:tweet_id>', tweet_detail_view),
    #path('api/tweets/<int:tweet_id>/delete', tweet_delete_view),
    #path('api/tweets/action', tweet_action_view),
    path('create-tweet', tweet_create_view),
    path('tweets', tweets_list_view),
    path('api/tweets/', include('tweets.urls'))
    
]
