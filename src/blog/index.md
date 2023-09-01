---
title: Blog
layout: page.njk
---

<dl>
    {%- for post in collections.blog | reverse -%}
        <dt><a href="{{new.url}}">{{post.data.title}}</a></dt>
        <dd>{{post.data.description}}<time datetime="{{post.data.date}}"><br/>{{post.data.date | PostDate}}</time>
        </dd>
    {%- endfor -%}
</dl>
