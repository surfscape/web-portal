---
title: Minimalism
description: Sites and directories related to minimalism on product design and on life.
---

<ul class="sk-content" style="list-style-type:disc;max-width: 50ch;margin: 0 auto;">
{%- for res in resources.minimalism -%}
    <li><a href="{{res.url}}">{{res.title}}</a>
    <p>{{res.description}}</p></li>
{%- endfor -%}
</ul>
