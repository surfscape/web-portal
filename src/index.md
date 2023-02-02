---
layout: base.njk
title: Home
---

<div class="pod">

# In Construction {.pod_heading}

<article>

Before getting ahead of ourselfs be aware that eversoul is in construction meaning that most pages, services and other content are not complete, most giving 404.

</article>

</div>

<div class="pod">

# Welcome {.pod_heading}

<article>

Hi, my name is ReduxFlakes and this is my little home on the internet and a tribute to the old web.

Here you can find a lot of stuff related to old tech from games to homebrew or tutorials and guides and obviously, a blog.

Since it's also my personal website you can find a lot about me especially my projects and social media.

</article>

</div>

<div class="pod">

# What's New {.pod_heading}

<article>

<div class="update-box">
{% for post in collections.update %}
<a href="{{post.url}}"><b>{{ post.data.title }} / {{ post.data.date | asPostDate }}</b></a> - {{ post.data.description }}
{% endfor %}
</div>

</article>

</div>
