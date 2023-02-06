---
layout: base.njk
title: The Music Database
---

<div class="pod">

## {{ title }} {.pod_title}

<div class="article">

Welcome to my music database! A full blown directory with all of my favourite songs, artists and albums.

Work in progress!

</div>

</div>

<div class="pod">

## Artits & Bands ({{ music_database.artistsItems.length }}) {.pod_title}

<div class="article">

<ul class="cards_list">{% for artistsItem in music_database.artistsItems %}<li><a href="{{ artistsItem.spotify }}"><img src="{{ artistsItem.img }}"/><div class="card_content"><h3>{{ artistsItem.name }}</h3></div></a></li>{% endfor %}</ul>

</div>

</div>
