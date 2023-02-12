---
layout: base.njk
title: Home
---

## Welcome

Hi, my name is ReduxFlakes and this is my little home on the internet and a tribute to the old personal web.

On this portal you can a lot of stuff related to old tech and music. This is also a place where I talk [about me](/about) and share guides and resources for people in the same realm.

If you ended up liking my web portal, head to the [Support](#support) section to learn how to support my work, thank you! - ReduxFlakes

## Buttons

A list of sites that I like and feel inspired by.

<ul style="padding:0;display:flex;gap:0.5rem;  flex-wrap:wrap;"role="list">{% for neobuttonsItem in buttons.neobuttonsItems %}
<li><a href="{{ neobuttonsItem.url }}"><img src="{{ neobuttonsItem.img }}"/></a></li>
{% endfor %}</ul>

Other button mostly related to software and other sites.

<ul style="padding:0;display:flex;gap:0.5rem;flex-wrap:wrap;"role="list">{% for otherbuttonsItem in buttons.otherbuttonsItems %}
<li>{% if otherbuttonsItem.url %}<a href="{{ otherbuttonsItem.url }}"><img src="{{ otherbuttonsItem.img }}"/></a>{% else %}<img src="{{ otherbuttonsItem.img }}"/>{% endif %}</li>{% endfor %}</ul>

## Support

If you like my website you can always add my 88x31 button to your website so more people can enjoy my content!

> Btw, you can hotlink if you want 😊

![eversoul 88x31 button](/assets/buttons/eversoul.png)

<textarea readonly>
&lt;a href="http://eversoul.neocities.org/"&gt;&lt;img src="http://eversoul.neocities.org/assets/buttons/eversoul.png" alt="eversoul 88x31 button"/&gt;&lt;/a&gt;</textarea>
