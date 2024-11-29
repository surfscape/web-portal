---
title: Web Building
description: Guides and tutorials on how to build websites, code snippets, and more!
---

<ul class="stack">
{%- for res in resources.webbuilding -%}
    <li><a href="{{res.url}}">{{res.title}}</a>
    <p>{{res.description}}</p></li>
{%- endfor -%}
</ul>
