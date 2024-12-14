---
title: Projects
layout: page
permalink: "/projects/"
toc_include_title: true
---

Every project in the SurfScape project umbrella.

## Active Projects

<ul class="sk-card-list">
{%- for project in projects.main -%}
    <li>
    <h3 style="display:flex;" id="{{project.projectTitle | slugify }}" tabindex="-1"><img src="/static/images/branding/projects/{{project.projectBrand}}" alt="{{project.projectTitle}} branding" width="48px" height="48px"> {{project.projectTitle}}</h3>
    <p>{{project.projectSummary}}</p>
    <a href="#" class="sk-button" >Not available</a>
    </li>
{%- endfor -%}
</ul>

## Deprecated Projects

<ul class="sk-card-list">
{%- for project in projects.deprecated -%}
    <li>
    <h3 style="display:flex;" id="{{project.projectTitle | slugify }}" tabindex="-1"><img src="/static/images/branding/projects/{{project.projectBrand}}" alt="{{project.projectTitle}} branding" width="48px" height="48px"> {{project.projectTitle}}</h3>
    <p>{{project.projectSummary}}</p>
    <a href="{{project.projectPage}}" class="sk-button">GitHub Repository (archived)</a>
    </li>
{%- endfor -%}
</ul>
