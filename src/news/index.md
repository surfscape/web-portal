---
title: News
layout: page.njk
banner: news
---

<div class="pod pod--content--only">
        <ul class="pod--list">
            {%- for new in collections.news -%}
                <li class="pod--li li--tlevel">
                    <a href="{{new.url}}">{{new.data.title}}</a>
                    <span>{{new.data.description}}<br/>{{new.data.date | PostDate}}</span>
                </li>
            {%- endfor -%}
        </ul>
    </div>
