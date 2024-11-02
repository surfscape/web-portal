---
title: Resources
hero_title: SurfScape Resources
hero_description: A collection of resources about the web, from web building & design, to resources on digital minimalism, and privacy.
---

<tab-container>
  <menu class="sk-tab-buttons" id="tabButtons">
    <li>
      <button class="sk-tab-button" data-tab="categories" aria-checked="true" id="tab-button">Categories</button>
    </li>
    <li style="margin-left:auto;">
      <button class="sk-tab-button" data-tab="submission" aria-checked="false">Submit a resource</button>
    </li>
  </menu>
  <sk-tab-content-container>
      <div class="sk-tab-content" id="categories" aria-hidden="false">
        <dl class="sk-content sk-content--sm">
          {%- for category in resources.categories -%}
          <dt><a href="/resources/{{category.name}}/">{{category.title}}</a></dt>
          <dd>{{category.description}}</dd>
          {%- endfor -%}
        </dl>
      </div>
    <div class="sk-tab-content" id="submission" aria-hidden="true">
      <section class="content">
      <h2 id="submit-a-website">Submit a resource</h2>
       <iframe data-tally-src="https://tally.so/embed/nWobVQ?alignLeft=1&hideTitle=1" loading="lazy" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" title="SurfScape Resource Submission"></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
      </section>
    </div>
  </tab-content-container>
</tab-container>
