---
layout: page.njk
title: Sitemap
eleventyExcludeFromCollections: true
---

Searching for the xml version? Check [here](/sitemap.xml)!

<ul>
{% for page in collections.all %}
<li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
{% endfor %}
</ul>
