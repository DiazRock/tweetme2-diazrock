from django.shortcuts import render
from django.http import HttpResponse
from .models import Tweet

# Create your views here.
def home_view(request, *args, **kwargs):
    return HttpResponse("<h1> Hello world!</h1>")

def tweet_detail_view(request, tweet_id, *args, **kwargs):
    return HttpResponse(f"<h1> Hello {tweet_id}</h1>")