---
layout: base.njk
title: The Music Database
---

## {{ title }} {.pod_title}

Welcome to my music database! A full blown directory with all of my favorite songs, artists, and albums!

## Artists & Bands ({{ music_database.artistsItems.length }}) {.pod_title}

<ul class="cards" role="list">{% for artistsItem in music_database.artistsItems %}<li class="card"><a href="{{ artistsItem.spotify }}"><img src="{{ artistsItem.img }}"/><article><h3>{{ artistsItem.name }}</h3></article></a></li>{% endfor %}</ul>

## Albums ({{ music_database.albumsItems.length }}) {.pod_title}

<ul class="cards" role="list">{% for albumsItem in music_database.albumsItems %}<li class="card"><a href="{{ albumsItem.spotify }}"><img src="{{ albumsItem.img }}"/><article><h3>{{ albumsItem.name }}</h3></article></a></li>{% endfor %}</ul>
