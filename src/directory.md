---
title: Directory
layout: page.njk
hero_title: SurfScape Directory
hero_description: Browse trough various personal websites & projects and find alternative web services.
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
      <div class="sk-tab-content " id="tab1" aria-hidden="false">
      <dl style="margin-left:0.25rem" class="content">
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
      <section class="content">
        <h2 id="submit-a-website">Submit a website</h2>
        <p>If you have a personal site that you want to share/promote, you can add it to our directory by contacting us trough our social media, trough email, or a <a href="">GitHub Issue/PR</a>  with the following information:</p>
        <ul>
        <li>Website Name</li>
        <li>Website URL (doesn't need to be hosted on NeoCities)</li>
        <li>An 8 digit code so that you can remove your site if don't want it on the directory anymore (only if the submission was made trough email)</li>
        </ul>
        <a href="/about/contact" class="sk-button">Contact Info</a>
      </section>
    </div>
  </tab-content-container>
</tab-container>
