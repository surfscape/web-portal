---
title: Directory - Beta
layout: page.njk
banner: directory.png
content_class: directory-container
---

<tab-container>
  <menu class="sk-tab-buttons">
    <li>
      <button class="sk-tab-button" data-tab="tab1" aria-checked="true">Neocities</button>
    </li>
        <li>
      <button class="sk-tab-button" data-tab="tab2" aria-checked="false" disabled>Web Services</button>
    </li>
    <li style="margin-left:auto;">
      <button class="sk-tab-button" data-tab="submission" aria-checked="false">Submit a site</button>
    </li>
  </menu>
  <sk-tab-content-container>
      <div class="sk-tab-content" id="tab1" aria-hidden="false">
      <dl style="margin-left:0.25rem">
        {%- for neocitiesDir in directory.neocitiesDir -%}
        <dt><a href="{{neocitiesDir.url}}" target=_blank>{{neocitiesDir.title}}</a></dt>
        <dd>{{neocitiesDir.summary}}</dd>
        {%- endfor -%}
      </dl>
    </div>
    <!-- <div class="sk-tab-content links-grid" id="tab1" aria-hidden="false">
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
    </div> -->
    <div class="sk-tab-content" id="submission" aria-hidden="true">
      <section>
        <h2 id="submit-a-website">Submit a website</h2>
        <p>If you have a personal site that you want to share/promote, you can add it to our directory! Just contact us below.</p>
        <a href="/about/contact" class="sk-button sk-button-ocean">Contact Info</a>
      </section>
    </div>
  </tab-content-container>
</tab-container>
