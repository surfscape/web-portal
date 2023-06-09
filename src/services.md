---
title: Services
banner: support
layout: page.njk
---

SurfScape Services is a collection of free and open-source services designed to improve the Neocities experience for users.

Our tools and services are free as in price and freedom, and we are committed to maintaining their open-source nature. We believe that everyone should have access to these tools and services, regardless of their technical or financial means.

<div class="pod">
<span class="pod--title">All Services</span>
<div class="pod--content pod--grid">
{% for services in nav.services %}
<a class="pod--links" href="{{services.url}}">
<img src="/assets/icon/32x32/{{services.icon}}" alt="{{services.title}} Icon">
{{services.title}}
</a>
{% endfor %}
</div>
</div>

SurfScape Services is a community-driven effort, and we welcome feedback and contributions from our users. If you have any suggestions, bug reports, or would like to contribute to the project, please visit our GitHub "Ideas" repository or contact us.
