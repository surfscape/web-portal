---
title: Resources
---

<dl class="stack">
  {%- for category in resources.categories -%}
    <dt><a href="/resources/{{category.name}}/">{{category.title}}</a></dt>
    <dd>{{category.description}}</dd>
  {%- endfor -%}
</dl>
