---
title: Resources
layout: page.njk
hero_title: SurfScape Resources
hero_description: A directory of everything about web building, from fonts, to templates, all available to be used on your Neocities website!
---

<p class="sk-infobox sk-infobox--warning" style="margin-bottom: 1em;">SurfScape Resources currently does not work since it's implementation was buggy and thus removed. Submissions are still open.</p>

<tab-container onload="showWarningModal()">
  <menu class="sk-tab-buttons" id="tabButtons">
    <li>
      <button class="sk-tab-button" data-tab="tab1" aria-checked="true" id="tab-button">Choose a catergory</button>
    </li>
    <li style="margin-left:auto;">
      <button class="sk-tab-button" data-tab="submission" aria-checked="false">Submit a resource</button>
    </li>
  </menu>
  <sk-tab-content-container>
      <div class="sk-tab-content" id="tab1" aria-hidden="false">
        <div id="category-viewer-container" style="display:none; flex-direction: column; gap:var(--spacing)">
            <button class="sk-button" onclick="closeFrame()" style="width: fit-content;">Go back...</button>
            <iframe src="#" frameborder="0" id="category-viewer" name="iframe_a"></iframe>
          </div>
      <dl id="category-selector" style="margin-left:0.25rem">
        {%- for categories in resources.categories -%}
        <dt><a href="{{categories.name}}" onclick="showFrame()" target="iframe_a" data-cat="{{categories.title}}">{{categories.title}}</a></dt>
        <dd>{{categories.description}}</dd>
        {%- endfor -%}
      </dl>
      </div>
    <div class="sk-tab-content" id="submission" aria-hidden="true">
      <section class="content">
        <h2 id="submit-a-website">Submit a resource</h2>
        <p>If you have found an interesting resource (a gif directory, or a well-written guide about CSS transitions) you can send us the link and category, and we will review it for addition.</p>
        <p>Please contact us trough mail with the following subject: "[SurfScape Resource Addition]"</p>
        <a href="/about/contact" class="sk-button sk-button-ocean">Contact Info</a>
      </section>
    </div>
  </tab-content-container>
</tab-container>
