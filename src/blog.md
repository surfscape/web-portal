---
layout: base.njk
title: Blog
draft: true
---

## Blog

Welcome to my "writings and ramblings" page!

Random posts mostly related to my life, programming, or any topic, to be honest.

<ul class="collection__list" role="list">
{% for post in collections.post | reverse %}
<li><a href="{{post.url}}"><b>{{ post.data.title }}</b></a> - {{ post.data.date | asPostDate }}</li>
{% endfor %}
</ul>
