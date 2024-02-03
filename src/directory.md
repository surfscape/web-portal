---
title: Directory - Beta
layout: page.njk
banner: directory.png
content_class: directory-container
---

<tab-container data-type="toggle">
  <menu class="tab-buttons">
    <li>
      <button class="tab-button" data-tab="tab1" aria-checked="true">Web Services</button>
    </li>
    <li>
      <button class="tab-button" data-tab="tab2" aria-checked="false">Neocities</button>
    </li>
    <li style="margin-left:auto;">
      <button class="tab-button" data-tab="submission" aria-checked="false" style="display:flex;gap:0.25rem;">Submit a site! <img src="/static/icons/32/new.png" alt="NEW badge icon" class="icon" style="width:21px;heigh:21px;"></button>
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
    <div class="tab-content" id="tab2" aria-hidden="true">
      <dl style="margin-left:0.25rem">
        {%- for neocitiesDir in directory.neocitiesDir -%}
        <dt><a href="{{neocitiesDir.url}}" target=_blank>{{neocitiesDir.title}}</a></dt>
        <dd>{{neocitiesDir.summary}}</dd>
        {%- endfor -%}
      </dl>
    </div>
    <div class="tab-content" id="submission" aria-hidden="true">
      <section>
        <h2 id="submit-a-website">Submit a website</h2>
        <p>Did you find an awesome web service that you want to share, or want to promote your personal website? Contact us through our email, and send us a submission!</p>
        <a href="/about/contact" class="sk-button sk-button-ocean">Contact Info</a>
      </section>
    </div>
  </tab-content-container>
</tab-container>
