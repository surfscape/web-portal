---
title: Directory
hero_title: SurfScape Directory
hero_description: Browse trough various personal websites & projects and find alternative web services.
---

<div class="auto-grid">
{%- for directorySites in directory.directorySites -%}
  <section class="stack">

## {{directorySites.title}}

  <ul>
    {%- for link in directorySites.links -%}
      <li>
        <a href="{{link.url}}" target=_blank>{{link.title}}</a>
      </li>
    {%- endfor -%}
  </ul>
  </section>
{%- endfor -%}
</div>
