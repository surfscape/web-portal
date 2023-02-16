---
layout: page.njk
title: The Music Database
crumbs:
  - title: The Music Database
---

This page is being reworked!

_All links go to spotify.com which means you are accepting their Terms of Service and Privacy Policy._

## Artists & Bands ({{ music_database.artistsItems.length }})

<ul class="cards" role="list">{% for artistsItem in music_database.artistsItems %}<li class="card"><a href="{{ artistsItem.spotify }}"><img src="{{ artistsItem.img }}"/><article><h3>{{ artistsItem.name }}</h3></article></a></li>{% endfor %}</ul>

## Albums ({{ music_database.albumsItems.length }})

<ul class="cards" role="list">{% for albumsItem in music_database.albumsItems %}<li class="card"><a href="{{ albumsItem.spotify }}"><img src="{{ albumsItem.img }}"/><article><h3>{{ albumsItem.name }}</h3></article></a></li>{% endfor %}</ul>
