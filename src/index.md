---
layout: base.njk
title: Home
---

<div class="pod" markdown=1>

# In Construction {.pod_heading}

<article>

Before getting ahead of ourselfs be aware that eversoul is in construction meaning that most pages, services and other content are not complete, most giving 404.

</article>

</div>

<div class="pod" markdown=1>

# Welcome {.pod_heading}

<article>

This is my little home on the web or what most people call it, a personal website.

I always had a website since 2021 but it wasn't personal enough, I tried to make it more similar to what I'm actually am but I just couldn't make it so in the start of 2023 I decided that I would change things and this website was born, _eversoul_.

</article>

</div>

<div class="pod" markdown=1>

# Blog {.pod_heading}

<article>

<ul class="blog_post_list" role="list">
{% for post in collections.post %}
<li><a href="{{post.url}}"><b>{{ post.data.title }}</b></a> - {{ post.data.date | asPostDate }}</li>
{% endfor %}
</ul>

</article>

</div>
