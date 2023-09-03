---
title: Directory - Beta
layout: page.njk
custom_bg: directory_brand
bg_color: 274F77
---

<tab-container data-type="toggle">
  <menu class="tab-buttons">
    <li>
      <button class="tab-button" data-tab="tab1" aria-checked="true">World Wide Web</button>
    </li>
    <li>
      <button class="tab-button" data-tab="tab2" aria-checked="false">Neocities</button>
    </li>
  </menu>
  <tab-content-container>
    <div class="tab-content links-grid" id="tab1" aria-hidden="false">
      {%- for directorySites in directory.directorySites -%}
      <section>
        <h2>{{directorySites.title}}</h2>
        <ul>
          {%- for link in directorySites.links -%}
          <li><a href="{{link.url}}" target=_blank>{{link.title}}</a></li>
          {%- endfor -%}
        </ul>
      </section>
      {%- endfor -%}
    </div>
    <div class="tab-content links-grid" id="tab2" aria-hidden="true">
      <ul>
        {%- for neocitiesDir in directory.neocitiesDir -%}
        <li><a href="{{neocitiesDir.url}}" target=_blank>{{neocitiesDir.title}}</a></li>
        {%- endfor -%}
        <li><a href"/community">Add your site here!</a></li>
      </ul>
      </div>
      </tab-content-container>
    </tab-container>