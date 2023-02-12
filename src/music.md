---
layout: base.njk
title: The Music Database
---

## {{ title }} {.pod_title}

Welcome to my music database! A full blown directory with all of my favourite songs, artists and albums.

### Artits & Bands ({{ music_database.artistsItems.length }}) {.pod_title}

<ul class="cards" role="list">{% for artistsItem in music_database.artistsItems %}<li class="card"><a href="{{ artistsItem.spotify }}"><img src="{{ artistsItem.img }}"/><article><h3>{{ artistsItem.name }}</h3></article></a></li>{% endfor %}</ul>
