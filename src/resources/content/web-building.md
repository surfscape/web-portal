---
title: Web Building
hero_title: Web Building
hero_description: Guides and tutorials on how to build websites, code snippets, and more!
---

<ul class="content" style="list-style-type:disc;max-width: 50ch;margin: 0 auto;">
{%- for res in resources.webbuilding -%}
    <li><a href="{{res.url}}">{{res.title}}</a>
    <p>{{res.description}}</p></li>
{%- endfor -%}
</ul>
