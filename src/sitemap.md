---
layout: base.njk
title: Sitemap
eleventyExcludeFromCollections: true
---

<div class="pod">

# {{title}} {.pod_heading}

<article>

Searching for the xml version? Check [here](/sitemap.xml)!

<ul>
{% for page in collections.all %}
<li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
{% endfor %}
</ul>

</article>

</div>
