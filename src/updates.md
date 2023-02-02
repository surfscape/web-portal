---
layout: base.njk
title: Updates
---

<div class="pod">

# {{title}} {.pod_heading}

<article>

A list of all eversoul updates and changelogs since it's inception.

<ul class="blog_post_list" role="list">
{% for post in collections.update %}
<li><a href="{{post.url}}"><b>{{ post.data.title }}</b></a> - {{ post.data.date | asPostDate }}</li>
{% endfor %}
</ul>

</article>

</div>
