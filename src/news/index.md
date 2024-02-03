---
title: News
layout: page.njk
banner: news.png
---

{% import "components/postCard.njk" as postCard %}

<ul class="posts--list">
    {%- for new in collections.news | reverse -%}
        {{ postCard.postCard(new.data.title, new.data.date, new.data.description, new.url) }}
    {%- endfor -%}
</ul>
