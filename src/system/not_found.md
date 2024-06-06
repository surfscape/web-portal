---
title: Page not found
permalink: /not_found.html
eleventyExcludeFromCollections: true
layout: page.njk
---

The url: <code id="url"></code> doesn't seem to exist in the server.

<a href="/" class="sk-button">Go back home</a>

<script>
  var x = document.URL;
  document
    .getElementById("url")
    .innerHTML = x;
</script>
