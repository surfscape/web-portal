---
title: Guestbook
style_slot: true
---

<iframe src="https://surfscape.123guestbook.com" frameborder="0"></iframe>

{% slot 'style_slot' %}

<style>
iframe {
    width: 100%;
    height: 480px;
}
</style>

{% endslot %}
