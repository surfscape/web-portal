---
title: Ecosystem
---

This page contains a list of all SurfScape services and applications and their privacy policy and their website.

<div class="table-resposive">

<table>
<thead>
<tr><th>Component</th>
<th>Description</th>
<th>Privacy Policy</th><th>Webstie</th></tr></thead>
<tbody>
{% for item in ecosystem %}
    <tr><td>{{item.component}}</td><td>{{item.description}}</td><td><a href="{{item.privacy}}">{{item.privacy}}</a></td><td><a href="{{item.website}}">{{item.website}}</a></td></tr>
{% endfor %}
</tbody>
</table>
</div>
