---
layout: home.njk
title: Home
---

<article class="notice__box info__box no--mar--pad content--container">

**Improved design - {{ site.updated }}**

{{ site.changes }}

</article>

## Welcome

Welcome to Eversoul, your friendly Neocities web portal inspired by the aesthetics and values of the old/indie web. We believe in a web that's free, creative, and community-driven, and we're passionate about preserving the spirit of the early internet.

At Eversoul, you'll find a wide range of content and communities that celebrate the creativity and diversity of the internet. From quirky personal pages to subversive zines, we aim to showcase the best of what the old/indie web had to offer, while also embracing new and emerging trends in web design and development.

I hope you enjoy it here and thanks for supporting the old web!

Learn more about us [here](/about)!

## Buttons

<ul style="padding:0;display:flex;gap:0.5rem;  flex-wrap:wrap;"role="list">{% for neobuttonsItem in buttons.neobuttonsItems %}
<li><a href="{{ neobuttonsItem.url }}"><img src="{{ neobuttonsItem.img }}"/></a></li>
{% endfor %}</ul>

<hr/>

<ul style="padding:0;display:flex;gap:0.5rem;flex-wrap:wrap;"role="list">{% for otherbuttonsItem in buttons.otherbuttonsItems %}
<li>{% if otherbuttonsItem.url %}<a href="{{ otherbuttonsItem.url }}"><img src="{{ otherbuttonsItem.img }}"/></a>{% else %}<img src="{{ otherbuttonsItem.img }}"/>{% endif %}</li>{% endfor %}</ul>

## Official 88x31 Button (outdated)

Support Eversoul by adding our 88x31 button!

![Eversoul 88x31 button](/assets/buttons/eversoul.png)

<textarea readonly aria-label="button-code">
&lt;a href="http://eversoul.neocities.org/"&gt;&lt;img src="http://eversoul.neocities.org/assets/buttons/eversoul.png" alt="eversoul 88x31 button"/&gt;&lt;/a&gt;</textarea>
