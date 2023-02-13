---
layout: base.njk
title: Home
---

<div class="new__box">

# eversoul testing launch!

After many iterations, Eversoul is now in the public testing phase!

</div>

## Welcome

Hi, eversoul is your friendly Neocities web portal, inspired by the old 2000s portals like MSN, AOL, Yahoo, and more!

## Buttons

<ul style="padding:0;display:flex;gap:0.5rem;  flex-wrap:wrap;"role="list">{% for neobuttonsItem in buttons.neobuttonsItems %}
<li><a href="{{ neobuttonsItem.url }}"><img src="{{ neobuttonsItem.img }}"/></a></li>
{% endfor %}</ul>

<hr/>

<ul style="padding:0;display:flex;gap:0.5rem;flex-wrap:wrap;"role="list">{% for otherbuttonsItem in buttons.otherbuttonsItems %}
<li>{% if otherbuttonsItem.url %}<a href="{{ otherbuttonsItem.url }}"><img src="{{ otherbuttonsItem.img }}"/></a>{% else %}<img src="{{ otherbuttonsItem.img }}"/>{% endif %}</li>{% endfor %}</ul>

## What's New

<div class="box">

**{{ site.updated }}** - {{ site.changes }}

</div>

## Support (outdated)

Support eversoul by adding our 88x31 button

> Btw, you can hotlink if you want ;)

![eversoul 88x31 button](/assets/buttons/eversoul.png)

<textarea readonly aria-label="button-code">
&lt;a href="http://eversoul.neocities.org/"&gt;&lt;img src="http://eversoul.neocities.org/assets/buttons/eversoul.png" alt="eversoul 88x31 button"/&gt;&lt;/a&gt;</textarea>
