---
layout: page.njk
title: Updates
---

A list of all eversoul updates and changelogs since it's inception.

<ul class="blog_post_list" role="list">
{% for post in collections.update | reverse %}
<li><a href="{{post.url}}"><b>{{ post.data.title }}</b></a> - {{ post.data.date | asPostDate }}</li>
{% endfor %}
</ul>
