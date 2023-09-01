---
title: News
layout: page.njk
banner: news
---

<dl>
    {%- for new in collections.news | reverse -%}
        <dt><a href="{{new.url}}">{{new.data.title}}</a></dt>
        <dd>{{new.data.description}}<time datetime="2023-07-07T12:12:30.000Z"><br/>{{new.data.date | PostDate}}</time>
        </dd>
    {%- endfor -%}
</dl>
