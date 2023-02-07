---
layout: base.njk
title: Home
---

<div class="pod">

## In Construction {.pod_title}

<div class="article">

Before getting ahead of ourselfs be aware that eversoul is in construction meaning that most pages, services and other content are not complete, most giving 404.

</div>

</div>

<div class="pod">

## Welcome {.pod_title}

<div class="article">

Hi, my name is ReduxFlakes and this is my little home on the internet and a tribute to the old web.

Here you can find a lot of stuff related to old tech from games to homebrew or tutorials and guides and obviously, a blog.

Since it's also my personal website you can find a lot about me especially my projects and social media.

</div>

</div>

<div class="pod">

## What's New <a class="button" href="/updates">Updates</a> {.pod_title}

<div class="article">

<div class="box">
{% for post in collections.update | reverse %}
<a href="{{post.url}}"><b>{{ post.data.title }} / {{ post.data.date | asPostDate }}</b></a> - {{ post.data.description }}
{% endfor %}
</div>

</div>

</div>

<div class="pod">

## Buttons {.pod_title}

<div class="article">

A list of sites that I like and feel inspired by.

<ul style="padding:0;display:flex;gap:0.5rem;  flex-wrap:wrap;"role="list">{% for neobuttonsItem in buttons.neobuttonsItems %}
<li><a href="{{ neobuttonsItem.url }}"><img src="{{ neobuttonsItem.img }}"/></a></li>
{% endfor %}</ul>

Other fun and serious buttons (some with links).

<ul style="padding:0;display:flex;gap:0.5rem;flex-wrap:wrap;"role="list">{% for otherbuttonsItem in buttons.otherbuttonsItems %}
<li>{% if otherbuttonsItem.url %}<a href="{{ otherbuttonsItem.url }}"><img src="{{ otherbuttonsItem.img }}"/></a>{% else %}<img src="{{ otherbuttonsItem.img }}"/>{% endif %}</li>{% endfor %}</ul>

</div>

</div>
