---
layout: page.njk
title: Blog
---

Hey you found my personal blog!

Random posts mostly related to my life or simply programming stuff.

<ul class="blog_post_list" role="list">
{% for post in collections.post %}
<li><a href="{{post.url}}"><b>{{ post.data.title }}</b></a> - {{ post.data.date | asPostDate }}</li>
{% endfor %}
</ul>
