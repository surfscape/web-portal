---
title: News
layout: page.njk
---

<dl>
    {%- for new in collections.news | reverse -%}
        <dt><a href="{{new.url}}">{{new.data.title}}</a></dt>
        <dd>{{new.data.description}}<time datetime="{{post.data.date}}"><br/>{{new.data.date | PostDate}}</time>
        </dd>
    {%- endfor -%}
</dl>
