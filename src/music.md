---
layout: base.njk
title: The Music Database
---

## {{ title }} {.pod_title}

Welcome to the eversoul music database, handpicked by ReduxFlakes.

_All the links go to spotify.com which means you are accepting their Terms of Service and Privacy policy._

## Artists & Bands ({{ music_database.artistsItems.length }}) {.pod_title}

<ul class="cards" role="list">{% for artistsItem in music_database.artistsItems %}<li class="card"><a href="{{ artistsItem.spotify }}"><img src="{{ artistsItem.img }}"/><article><h3>{{ artistsItem.name }}</h3></article></a></li>{% endfor %}</ul>

## Albums ({{ music_database.albumsItems.length }}) {.pod_title}

<ul class="cards" role="list">{% for albumsItem in music_database.albumsItems %}<li class="card"><a href="{{ albumsItem.spotify }}"><img src="{{ albumsItem.img }}"/><article><h3>{{ albumsItem.name }}</h3></article></a></li>{% endfor %}</ul>
